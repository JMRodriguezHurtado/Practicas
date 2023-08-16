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
  

  function contarTragos (Queue) {
    const tragos = {};
    if (Queue.size() === 0) return "No hay tragos";
    while(Queue.size() > 0) {
        const trago = Queue.dequeue();
       if (tragos.hasOwnProperty(trago)) {
        tragos[trago].cantidad++;
       } else {
        tragos[trago] = {trago: trago, cantidad: 1};
       }
    } return Object.values(tragos);  
}

let cuenta = new Queue;

cuenta.enqueue("margarita");
cuenta.enqueue("tequila sunshine");
cuenta.enqueue("vodka");
cuenta.enqueue("mojito");
cuenta.enqueue("margarita");
cuenta.enqueue("fantasma");
cuenta.enqueue("tequila sunshine");
cuenta.enqueue("vino");

console.log(cuenta);

console.log(contarTragos(cuenta));

