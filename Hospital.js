/*1️⃣ ***** EJERCICIO 1 ***** - henryHospital() 1️⃣
¡Tenemos complicaciones! 
En nuestro hospital se formó una fila de personas quede deben ser atendidas. Tendrás que filtrar a los pacientes.
Aquellos pacientes que ya fueron atendidos deberás agregarlos a una nueva Queue llamada "Atendidas". Quienes aún
no han sido atendidos serán agregados a otra Queue llamada "EnEspera".

¿Cómo saber quienes serán atendidos? La doctora del hospital solo atiende a las personas:
 - Con una edad igual o mayor a 18 años. 
 - Además su altura sea superior a 150 cm.
Las personas que no cumplan con estos requisitos quedarán en espera.

📝 EJEMPLO 📝
(INPUT) ➡
Queue {
 array: [
   { nombre: 'Carol', edad: 24, altura: 146 },
   { nombre: 'Gonzalo', edad: 24, altura: 184 },
   { Nombre: 'Micaias', edad: 20, altura: 181 },
   { Nombre: 'Coraline', edad: 22, altura: 165 },
   { Nombre: 'Marcos', edad: 19, altura: 154 },
   { nombre: 'Mati', edad: 14, altura: 175 }
 ]
}

(OUTPUT) ➡
let ejemplo = {
 Atendidas: Queue {
   array: [
     { nombre: 'Gonzalo', edad: 24, altura: 184 },
     { Nombre: 'Micaias', edad: 20, altura: 181 },
     { Nombre: 'Coraline', edad: 22, altura: 165 },
     { Nombre: 'Marcos', edad: 19, altura: 154 }
   ]
 },
 EnEspera:  Queue {
   array: [
     { nombre: 'Carol', edad: 24, altura: 146 },
     { nombre: 'Mati', edad: 14, altura: 175 }
   ]
 }
}

REQUISITOS
 🟢 La función debe retornar el objeto con las propiedades Atendidas y EnEspera, sus valores son QUEUE con los datos esperados.
 🟢 Las QUEUE que retorna la función deben ser una instancia de la clase QUEUE.
*/

const gente = [
{ nombre: 'Carol', edad: 24, altura: 146 },
{ nombre: 'Gonzalo', edad: 24, altura: 184 },
{ Nombre: 'Micaias', edad: 20, altura: 181 },
{ Nombre: 'Coraline', edad: 22, altura: 165 },
{ Nombre: 'Marcos', edad: 19, altura: 154 },
{ nombre: 'Mati', edad: 14, altura: 175 }
];


function Queue () {
  this.lista = [];
}
Queue.prototype.enqueue = function(valor) {
  return this.lista.push(valor);
}
Queue.prototype.dequeue = function() {
  if(!this.lista.length) return undefined;
  return this.lista.shift();
}
Queue.prototype.size = function() {
  return this.lista.length;
}
Queue.prototype.search = function(valor) {
  return this.lista.includes(valor); 
}
Queue.prototype.merge = function(queue1, queue2) {
  let result = new Queue();
  while(queue1.size() && queue2.size()) {
    result.enqueue(queue1.dequeue());
    result.enqueue(queue2.dequeue());
  } while (queue1.size() > 0) {
    result.enqueue(queue1.dequeue());
  } while(queue2.size() > 0) {
    result.enqueue(queue2.dequeue());
  } return result;
}

let listaDeEspera = new Queue;

listaDeEspera.enqueue({ nombre: 'Carol', edad: 24, altura: 146 });
listaDeEspera.enqueue({ nombre: 'Gonzalo', edad: 24, altura: 184 });
listaDeEspera.enqueue({ nombre: 'Micaias', edad: 20, altura: 181 });
listaDeEspera.enqueue({ nombre: 'Coraline', edad: 22, altura: 165 });
listaDeEspera.enqueue({ nombre: 'Marcos', edad: 19, altura: 154 });
listaDeEspera.enqueue({ nombre: 'Mati', edad: 14, altura: 175 });

console.log(listaDeEspera);

let atendidas = new Queue;

let enEspera = new Queue;

function pasanNoPasan(obj) {
  return obj.altura >= 150 && obj.edad >= 18;
}

function atender(fromQueue, toQueue, condition) {
  while (fromQueue.size() > 0) {
    const obj = fromQueue.dequeue();
    if (condition(obj)) {
      toQueue.enqueue(obj);
    } else {
      enEspera.enqueue(obj);
    }
  }
}

atender(listaDeEspera, atendidas, pasanNoPasan);
console.log(listaDeEspera);
console.log(atendidas);
console.log(enEspera);