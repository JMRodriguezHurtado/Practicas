//queue de pelicuas y estreno que se acomodan en orden
function guardarPeliculas(pelisQueue) {
    // Tu código aquí
 const contenedor = {};
 let index = 1;
 while (pelisQueue.size() > 0) {
     const pelicula = pelisQueue.dequeue();
     if (index === 1) {
         contenedor["estrenar"] = pelicula;
     } else {
        contenedor[index - 1] = pelicula;
     }
     index++;
 }
      return contenedor;
}
//apila pantalones de 2 arrays, uno con numeros y otro con un solo numero, los compara y los acomoda en stacks


function apilarPantalones(listaDeTallas, talla) {
    // Tu código aquí
   const busqueda = { 
        pantalonesEncontrados: new Stack(),
        pantalonesRestantes: new Stack()
    };

    // Iterate through the list of sizes and separate them
    listaDeTallas.forEach(elemento => {
        if (elemento === talla) {
            busqueda.pantalonesEncontrados.push(elemento);
        } else {
            busqueda.pantalonesRestantes.push(elemento);
        }
    });
    
    return busqueda;
}
//revisa disponibilidad de un string de ropas

function chequearDisponibilidad(ropas) {
    // Tu código aquí
  return function(stock) {
        let contadorencontrado = 0;

        ropas.forEach((element) => {
            if (stock.includes(element)) {
                contadorencontrado++;}});
                if (contadorencontrado === 0) {
            return "No se encontraron las prendas solicitadas";
        } else if (contadorencontrado === ropas.length) {
            return "Todas las prendas fueron encontradas";
        } else {
            return `${contadorencontrado} de las ${ropas.length} prendas solicitadas se encuentran en stock`;
        }
    };

}
//esta funcion revisa si los numeros son primos y despues los ordena y los retorna ordenados

function sortPrimeHouses(array) {
    // Tu código aquí:
    function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}
if (array.some(element => element <= 1 || (element % 2 === 0 && element !== 2))) {
        return false; 
    }
    if (array.length <= 1) {
      return array;
    }
    const mid = Math.floor(array.length / 2);
    const izq = array.slice(0, mid);
    const der = array.slice(mid);
    const merge = (izq, der) => {
      let result = [];
      while (izq.length && der.length) {
        result.push(izq[0] < der[0] ? izq.shift() : der.shift());
      }
      return result.concat(izq.length ? izq : der);
    };
    return merge(sortPrimeHouses(izq), sortPrimeHouses(der)); 
}
// Metodo linkedlist slice

LinkedList.prototype.sliceRooms = function(firstIndex, secondIndex) {
    // Tu código aquí:
     let newList = new LinkedList();
    let start = false;
    
    let currentNode = this.head;
    
    while (currentNode !== null && currentNode.value !== firstIndex) {
        currentNode = currentNode.next;
    }
    
    if (currentNode !== null && currentNode.value === firstIndex) {
        start = true;
        currentNode = currentNode.next; 
    }
    
    while (currentNode !== null && currentNode.value !== secondIndex) {
        newList.add(currentNode.value);
        currentNode = currentNode.next;
    }
    
    return newList;
}
//metodo linkedlist map

LinkedList.prototype.mapHouses = function(word) {
    // Tu código aquí:
    let current = this.head;
    if (this.head === null) {return "No encontramos cambios posibles"};
    if (word === undefined) {"No encontramos cambios posibles"};
    while (current) {
        current.value = word;
        current = current.next;
    }
}
//metodo binarysearchtree para crear un valor dentro y ponerlo a true

BinarySearchTree.prototype.vender = function (prendas) {
    // Tu código aquí
    if(this.value){
        prendas.forEach((element) => {
        if(this.value.nombre === element) {this.value.vendido = true};
    });
    }
    if(this.left){
        this.left.vender(prendas);
     } 
    if(this.right){
        this.right.vender(prendas);
    }
};
//metodo binarysearchtree para retornar un array en orden alfabetico

BinarySearchTree.prototype.enOrden = function () {
    // Tu código aquí
    const carta = [];
    if (this.left) {
        carta.push(...this.left.enOrden());
    }
    carta.push(this.value.nombre);
    if (this.right) {
        carta.push(...this.right.enOrden());
    }
    return carta;
};
// Calcula un numero de casa por año


function casasAnuales(n) {
    // Tu código aquí:
    if(n < 0) {return false};
    if(n === 0) {return 0};
    if(n === 1) {return 30};
    return casasAnuales(n - 1) + casasAnuales(n/n);
}

//selecciona una pelicula de un objecto que contiene varias peliculas y lo hace con recursion

function encontrarPelicula(cartelera, pelicula) {
    // Tu código aquí:
        for (const key in cartelera) {
            if (typeof cartelera[key] === 'string') {
                if (cartelera[key] === pelicula) {
                    return `Si, tenemos la pelicula ${pelicula}`;
                }
            } else if (typeof cartelera[key] === 'object') {
                if (encontrarPelicula(cartelera[key], pelicula)) {
                    return `Si, tenemos la pelicula ${pelicula}`;
                }
            }
        }
        return "Actualmente no tenemos la pelicula";
    }
