//Practicando con Linked Lists

function Nodo (data) {
    this.data = data;
    this.next = null;
}
function LinkedList () {
    this._length = 0;
    this.head = null;
}
LinkedList.prototype.insertAlIncio = function (data) {
    let nodo = new Nodo(data);
    let current = this.head;
    if (!this.head){
        this.head = nodo;
    } else {
        nodo.next = current;
        this.head = nodo;
    }
        this._length++;
        return nodo;
    };
LinkedList.prototype.insertarray = function(array) {
    array.forEach(element => {this.insert(element); 
    });
}
LinkedList.prototype.insert = function(data){
    let nodo = new Nodo(data);
    let current = this.head
    if(!this.head){
        this.head = nodo;
        this._length++;
        return nodo;
    } else {
        while (current.next){
            current = current.next
        } current.next = nodo;
    } this._length++;
    return nodo;
}
LinkedList.prototype.remove = function(){
    let current = this.head;
    if (this._length === 0) return null;
    if (this._length === 1) {let aux = current.data;
    this.head = null;
    this._length--;
    return aux;
} while (current.next.next) {current = current.next};
    let aux = current.next.data;
    current.next = null;
    this._length--;
    return aux;
}
LinkedList.prototype.search = function(data) {
    let current = this.head;
    while (current) {
        if(current.data === data) {
            return current;
        } current = current.next;
    } return null;
}
LinkedList.prototype.slice = function(start, end) {
    let current = this.head;
    let startIndex = 0;
    let endIndex = -1;
    let startNode = null;
    let endNode = null;

    while(current) {
        if(current.data === start) {
            startNode = current;
            break;
        }
        current = current.next;
        startIndex++;
    }
    if(!startNode) {
        return new LinkedList();
    }
    current = startNode.next;
    endIndex = startIndex + 1;

    while(current) {
        if(current.data === end) {
            endNode = current;
            break;
        }
        current = current.next;
        endIndex++;
    }
    if(!endNode) {
        return new LinkedList();
    }
    const slicedList = new LinkedList();
    current = startNode;
    while(current !== endNode) {
        slicedList.insert(current.data);
        current = current.next;
    }
    slicedList.insert(endNode.data);
    return slicedList;
};
LinkedList.prototype.mapObjetos = function(element) {
    let currentNode = this.head;
    while(currentNode) {
        currentNode.data = word(currentNode.data);
        currentNode = currentNode.next;
    }
};


let heroes = new LinkedList;

const marvel = [{Heroe: "Spiderman", dimension: 616, abilidad: "poderes de araña"},
{Heroe: "Wolverine", dimension: 1236, abilidad: "regeneracion"},
{Heroe: "Dr. Strange", dimension: 616, abilidad: "hechicero supremo"},
{Heroe: "Powerman", dimension: 269, abilidad: "piel de titanio"},
{Heroe: "Spider-gwen", dimension: 3212, abilidad: "poderes de araña"},
{Heroe: "Kitty Pride", dimension: 5691, abilidad: "atravesar solidos"},
{Heroe: "Capitan America", dimension: 616, abilidad: "super fuerza"}]

heroes.insertarray(marvel);

console.log(heroes);

console.log(heroes.search("Powerman"));