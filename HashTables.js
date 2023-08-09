// Practica de Hashtables

function HashTable () {
    this.lockers = [];
    this.numLockers = 35
}

HashTable.prototype.hash = function (key) {
    let suma = 0;
    for(let i = 0; i < key.length; i++) {
        suma += key.charCodeAt (i)
    } return suma % this.numLockers
};
HashTable.prototype.set = function (key, value) {
    if (typeof key !== "string") throw TypeError ("Debe ser un string");
    let index = this.hash(key);
    if(this.lockers[index] === undefined) {
        this.lockers[index] = {}
    } this.lockers[index] [key] = value;
};
HashTable.prototype.get = function (key) {
    let index = this.hash(key)
    if(this.lockers[index] [key]) {
        return this.lockers[index] [key]
    } return "Aqui no hay nada"
};
HashTable.prototype.hasKey = function (key) {
    let index = this.hash(key);
    return this.lockers[index].hasOwnProperty(key)
};

let monitor = new HashTable;

monitor.set("Juan", "juanmrodrihur1989");

console.log(monitor);