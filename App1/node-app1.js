// Algoritmo de búsqueda Lineal o Secuencial
function busquedaLineal(arr, elementoBuscado) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elementoBuscado) {
        return i;
      }
    }
    return -1;
  }
  
  // Algoritmo de búsqueda por saltos (Búsqueda binaria)
  function busquedaSaltos(arr, elementoBuscado) {
    let inicio = 0;
    let fin = arr.length - 1;
  
    while (inicio <= fin) {
      let medio = Math.floor((inicio + fin) / 2);
  
      if (arr[medio] === elementoBuscado) {
        return medio;
      } else if (arr[medio] < elementoBuscado) {
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
  
    return -1;
  }
  
  // Ejecucion
  const arrayOrdenado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const elementoBuscado = 6;
  
  const indiceLineal = busquedaLineal(arrayOrdenado, elementoBuscado);
  const indiceSaltos = busquedaSaltos(arrayOrdenado, elementoBuscado);
  
  console.log(`Búsqueda Lineal: El elemento ${elementoBuscado} está en el índice ${indiceLineal}`);
  console.log(`Búsqueda por Saltos: El elemento ${elementoBuscado} está en el índice ${indiceSaltos}`);
  