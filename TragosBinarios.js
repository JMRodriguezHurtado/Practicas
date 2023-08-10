//Arbol Binario para registrar y buscar tragos

const BinarySearchTree = function (bebida){ 
    this.root = bebida;
    this.right = null;
    this.left = null;
};

BinarySearchTree.prototype.insert = function (bebida) {
    if(bebida.precio < this.root.precio) {
        if (this.left === null) {
            this.left = new BinarySearchTree (bebida);
        } else {
            this.left.insert(bebida);
        }
    } if(bebida.precio > this.root.precio) {
        if (this.right === null) {
            this.right = new BinarySearchTree (bebida);
        } else {
            this.right.insert(bebida);
        }
    }
};
BinarySearchTree.prototype.size = function () {
    if(this.right && this.left) return 1 + this.left.size() + this.right.size();
    if(this.left && !this.right) return 1 + this.left.size();
    if(!this.left && this.right) return 1 + this.right.size();
    if(!this.left && !this.right) return 1;
};
BinarySearchTree.prototype.contains = function(bebida) {
    if(this.root === bebida) return true;
    if(bebida.precio < this.root.precio) {
        if(this.left === null) {
            return false
        } else {
            return this.left.contains(bebida);
        }
    } if(bebida.precio > this.root.precio) {
        if(this.right === null) {
            return false 
        } else {
            return this.right.contains(bebida);
        }
    } 
}
BinarySearchTree.prototype.buscarPaQueMeAlcanza = function (efectivo) {
    const meAlcanzaPara = [];
    if(efectivo < this.root.precio) {
        if(this.left) {
            meAlcanzaPara.push(...this.left.buscarPaQueMeAlcanza(efectivo));
        }
    } else if (efectivo >= this.root.precio) {
        meAlcanzaPara.push(this.root.trago);
        if (this.left) {
            meAlcanzaPara.push(...this.left.buscarPaQueMeAlcanza(efectivo));
        }
        if (this.right) {
            meAlcanzaPara.push(...this.right.buscarPaQueMeAlcanza(efectivo));
        }
    } return meAlcanzaPara;
}
BinarySearchTree.prototype.insertArray = function(array) {
    array.forEach((element) => this.insert(element));
};
BinarySearchTree.prototype.sumation = function () {
    let suma = 0;
    if (this.root) {
        suma += this.root;
    } if (this.left) {
        suma += this.left.sumation();
    } if (this.right) {
        suma += this.right.sumation();
    } return suma;
}

let bar = new BinarySearchTree ({trago: "margarita", precio: 80});
console.log(bar);
bar.insert({trago:"tequila", precio: 100});
bar.insert({trago: "agua", precio: 50});
bar.insert({trago: "vodka", precio: 90});
bar.insert({trago: "fantasma", precio: 150});
bar.insert({trago: "paloma", precio: 160});
console.log(bar);
console.log(bar.size());
console.log(bar.buscarPaQueMeAlcanza(140));