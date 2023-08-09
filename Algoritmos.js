//Practicando con algoritmos

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
  let factors = [1];
  let x = 2;
    while (num > 1) {
      if (num % x === 0) {
        factors.push (x)
        num = num / x;
      } 
      else {
        x++
      }
    }
    return factors;
  }

console.log(factorear(70))


function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
      for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
          if (array[i] > array[j]) {
            let count = array[i];
            array[i] = array[j];
            array[j] = count;
          }
        }
      } 
      return array;
  };
let esto = [6,10,30,19,2,5];
console.log(bubbleSort(esto));  

function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 1; i < array.length; i++) {
      let j = i;
      while (j > 0 && array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
        j--;
      }
    } return array;
  };

  let aquello = [5, 15, 24, 89, 12, 2, 102];

  console.log(insertionSort(aquello));

  
function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    const coso = array.length;
    let chico, temp;
      for (let i = 0; i < coso - 1; i++) {
        chico = i;
        for (let j = i + 1; j < coso; j++) {
          if (array[j] < array[chico]) {
          chico = j;
        }
      } if (chico !== i) {
        temp = array[i];
        array[i] = array[chico];
        array[chico] = temp;
      } 
    }  return array;
  };

  let unaMas = [67, 34, 12, 98, 102, 2, 1, 6];
  console.log(selectionSort(unaMas));
  
  //Pregunta: que tal si quisiera ordenar un string usando alguno de estos metodos

  function bubbleSortRopa(array) {
 
      for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
          if (array[i].precio > array[j].precio) {
            let count = array[i];
            array[i] = array[j];
            array[j] = count;
          }
        }
      } 
      return array;
  };
  let ropation = [{prenda: "Sueter", precio: 120}, {prenda: "Playera", precio: 300},
                  {prenda: "Pantalon", precio: 500}, {prenda: "Bufanda", precio: 100},
                  {prenda: "Abrigo", precio: 860}, {prenda: "Falda", precio: 220},];

//console.log(bubbleSortRopa(ropation));
console.log(ropation);
function insertionSortRopa(array) {
  
    for (let i = 1; i < array.length; i++) {
      let j = i;
      while (j > 0 && array[j - 1].precio > array[j].precio) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
        j--;
      }
    } return array;
  };

  //console.log(insertionSortRopa(ropation));

  function selectionSortRopa(array) {

    const coso = array.length;
    let chico, temp;
      for (let i = 0; i < coso - 1; i++) {
        chico = i;
        for (let j = i + 1; j < coso; j++) {
          if (array[j].precio < array[chico].precio) {
          chico = j;
        }
      } if (chico !== i) {
        temp = array[i];
        array[i] = array[chico];
        array[chico] = temp;
      } 
    }  return array;
  };

  console.log(selectionSortRopa(ropation));
