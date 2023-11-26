// Algoritmo de búsqueda binaria (asume que el arreglo está ordenado)
function busquedaBinaria(arr, elemento) {
    let inicio = 0;
    let fin = arr.length - 1;
  
    while (inicio <= fin) {
      const medio = Math.floor((inicio + fin) / 2);
  
      if (arr[medio] === elemento) {
        return medio;
      } else if (arr[medio] < elemento) {
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
  
    return -1; 
  }
  
  // Algoritmo de búsqueda por el método de la burbuja
  function ordenamientoBurbuja(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  // Ejecucion
  const arregloOrdenado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const elementoBuscadoBinaria = 6;
  const arregloDesordenado = [64, 34, 25, 12, 22, 11, 90];
  console.log('Búsqueda Binaria:', busquedaBinaria(arregloOrdenado, elementoBuscadoBinaria));
  
  console.log('Arreglo Desordenado:', arregloDesordenado);
  ordenamientoBurbuja(arregloDesordenado);
  console.log('Arreglo Ordenado por Burbuja:', arregloDesordenado);