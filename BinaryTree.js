//Practicando con un binary tree

const BinarySearchTree = function (value){ 
    this.value = value;
    this.right = null;
    this.left = null;
};

BinarySearchTree.prototype.insert = function (value) {
    if(value < this.value) {
        if (this.left === null) {
            this.left = new BinarySearchTree (value);
        } else {
            this.left.insert(value);
        }
    } if(value > this.value) {
        if (this.right === null) {
            this.right = new BinarySearchTree (value);
        } else {
            this.right.insert(value);
        }
    }
};
BinarySearchTree.prototype.size = function () {
    if(this.right && this.left) return 1 + this.left.size() + this.right.size();
    if(this.left && !this.right) return 1 + this.left.size();
    if(!this.left && this.right) return 1 + this.right.size();
    if(!this.left && !this.right) return 1;
};
BinarySearchTree.prototype.contains = function(value) {
    if(this.value === value) return true;
    if(value < this.value) {
        if(this.left === null) {
            return false
        } else {
            return this.left.contains(value);
        }
    } if(value > this.value) {
        if(this.right === null) {
            return false 
        } else {
            return this.right.contains(value);
        }
    } 
}
BinarySearchTree.prototype.buscarTodosLosMenores = function (value) {
    const losMenores = [];
    if(value < this.value.edad) {
        if(this.left) {
            losMenores.push(...this.left.buscarTodosLosMenores(value));
        }
    } else if (value >= this.value.edad) {
        losMenores.push(this.value.nombre);
        if (this.left) {
            losMenores.push(...this.left.buscarTodosLosMenores(value));
        }
        if (this.right) {
            losMenores.push(...this.right.buscarTodosLosMenores(value));
        }
    } return losMenores;
}
BinarySearchTree.prototype.insertArray = function(array) {
    array.sort((a, b) => a.edad - b.edad); 
    array.forEach((element) => this.insert(element));
};
const gente = [
    { nombre: 'Carol', edad: 24, altura: 146 },
    { nombre: 'Gonzalo', edad: 24, altura: 184 },
    { Nombre: 'Micaias', edad: 20, altura: 181 },
    { Nombre: 'Coraline', edad: 22, altura: 165 },
    { Nombre: 'Marcos', edad: 19, altura: 154 },
    { nombre: 'Mati', edad: 14, altura: 175 }
    ];
let hospital = new BinarySearchTree(null);
console.log(hospital);
hospital.insert(1);
console.log(hospital);
hospital.insert(4);
hospital.insert(3);
console.log(hospital);
