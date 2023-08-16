//Algoritmos eficientes que usan recursion
//Primero probaremos el quickSort

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length <= 1) {
      return array;
    }
  
    const pivotIndex = Math.floor(Math.random() * array.length);
    const pivot = array[pivotIndex];
    const left = [];
    const igual = [];
    const right = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else if (array[i] > pivot) {
        right.push(array[i]);
      } else {
        igual.push(array[i]);
      }
    } 
    return [...quickSort(left), ...igual, ...quickSort(right)];
  }
  
  let numeros = [12, 43, 3, 89, 78, 56, 4, 11, 1];

  console.log(quickSort(numeros));

  //Ahora el merge

  function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
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
    return merge(mergeSort(izq), mergeSort(der)); 
}

let aleatorio = [89, 90, 56, 1, 4, 63, 78, 200, 2, 567];

console.log(mergeSort(aleatorio));

// Digamos que ahora queremos adaptar estos algoritmos a otro array un poco mas complicado
// Empezemos con quicksort y que acomode ropa por precio y retorne un array unicamente con las prendas

let ropation = [{prenda: "Sueter", precio: 120}, {prenda: "Playera", precio: 300},
                  {prenda: "Pantalon", precio: 500}, {prenda: "Bufanda", precio: 100},
                  {prenda: "Abrigo", precio: 860}, {prenda: "Falda", precio: 220},];

function quickSortRopa(array) {
           
    if (array.length <= 1) {
        return array.map(prop => prop.prenda);
                    }
                  
    const pivotIndex = Math.floor(Math.random() * array.length);
    const pivot = array[pivotIndex].precio;
    const left = [];
    const centro = [];
    const right = [];
                  
    for (let i = 0; i < array.length; i++) {
        if (array[i].precio < pivot) {
            left.push(array[i]);
            } else if (array[i].precio > pivot) {
                right.push(array[i]);
            } else {
                centro.push(array[i]);
                }
            } 
        return [...quickSortRopa(left), ...centro.map(prop => prop.prenda), ...quickSortRopa(right)];
    };
    
console.log(quickSortRopa(ropation));           

//Probemos merge usando un array de pelicuas e intentar acomodarlas por años

let pelicuas = [{titulo: "MI4", año: 2016}, {titulo: "MI3", año: 2011},{titulo: "MI2", año: 2004},
                {titulo: "MI1", año: 1998}, {titulo: "RyF", año: 1990},{titulo: "ESO", año: 1989},]

function mergeSortPeliculas(array) {
    
    if (array.length <= 1) {
      return array.map(prop => prop.titulo);
    }
    const mid = Math.floor(array.length / 2);
    const izq = array.slice(0, mid);
    const der = array.slice(mid);
    const merge = (izq, der) => {
      let result = [];
      while (izq.length && der.length) {
        result.push(izq[0].año < der[0].año ? izq.shift() : der.shift());
      }
      return result.concat(izq.length ? izq : der);
    };
    return merge(mergeSortPeliculas(izq), mergeSortPeliculas(der)); 
}

console.log(mergeSortPeliculas(pelicuas))
