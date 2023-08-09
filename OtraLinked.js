//Una actividad mas con LinkedLists


function Nodo (data) {
    this.data = data;
    this.next = null;
}
function LinkedList () {
    this._length = 0;
    this.head = null;
}
LinkedList.prototype.instertAlIncio = function (data) { //este metodo agrega un nodo al inicio
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
LinkedList.prototype.gethead = function () {
    if(this.head) { 
    return this.head.data;
    } else { return null;}
};
LinkedList.prototype.getTail = function() {
    let current = this.head;
    if (this._length === 0) return null;
    if (this._length === 1) { 
    return this.head.data;
} while (current.next.next) {current = current.next};
    let aux = current.next.data;
    return aux;
}

let worales = new LinkedList;

worales.insert({orale: "caramba", quecosa: "cososa"});
console.log(worales);
worales.insert("changos");
console.log(worales);
console.log(worales.gethead());
console.log(worales.getTail());
console.log(worales.search("changos"));