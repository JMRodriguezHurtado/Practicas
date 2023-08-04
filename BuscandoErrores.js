// 2️⃣ ***** EJERCICIO 2 ***** - BuscandoError() 2️⃣
// En el hospital unas de las maquinas empezó a fallar y lanzan un error por pantalla, debemos identificar cuáles tienen un patron de inicio y cierre:
// Necesitamos que determines si el error esta balanceado en cuanto a paréntesis, corchetes y llaves.
// La función debe devolver true si los paréntesis, corchetes y llaves están balanceados y false en caso contrario.
// Se considera que los paréntesis, corchetes y llaves están balanceados si para cada uno de estos símbolos de apertura hay un símbolo de cierre correspondiente y los símbolos están correctamente anidados.

// Ejemplo:

// Input: "{[()()]}"
// Output: true

// Input: "([)]"
// Output: false
//
//
// REQUISITOS:
//  🟢 Respetar el principio de LIFO que tienen los stacks
//  🟢 Retornar true o false, dependiendo de lo que corresponda.
//  🟢 Investigar que hace el metodo charAt, les puede servir

function Stack () {
  this.pila = [];
}
Stack.prototype.apilar = function (valor) {
  return this.pila.unshift(valor);
}
Stack.prototype.quitar = function (){
  return this.pila.shift();
}
Stack.prototype.incluye = function(valor) {
  return this.pila.includes(valor);
}
let parrafo = new Stack;
parrafo.apilar({Heroe: "Spiderman", dimension: 616, abilidad: "poderes de araña"});
parrafo.apilar({Heroe: "Wolverine", dimension: 1236, abilidad: "regeneracion"});
parrafo.apilar({Heroe: "Dr. Strange", dimension: 616, abilidad: "hechicero supremo"});
parrafo.apilar({Heroe: "Powerman", dimension: 269, abilidad: "piel de titanio"});
parrafo.apilar({Heroe: "Spider-gwen", dimension: 3212, abilidad: "poderes de araña"});
parrafo.apilar({Heroe: "Kitty Pride", dimension: 5691, abilidad: "atravesar solidos"});
parrafo.apilar({Heroe: "Capitan America", dimension: 616, abilidad: "super fuerza"});

console.log(parrafo);