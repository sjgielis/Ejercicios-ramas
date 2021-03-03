// 🔍 Buscador
// Crear un programa que muestre:

// un input de texto
// una lista ul
// El programa debe tener como datos un array con strings con distintas palabras, y al inicializarse la lista debe mostrar las palabras del array como ítems de lista.

// Al escribir en el input, se debe actualizar la lista para mostrar aquellas palabras que contengan como substring lo ingresado, ignorando mayúsculas y minúsuculas. Es decir, si se busca script y JavaScript es un string dentro del array, se debe mostrar.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// Cuando el input no tienen ningún valor ingresado, la lista debe mostrar todos los ítems del array.

// TIP: vas a necesitar dos arrays, uno para todas las palabras y otro para los resultados de búsqueda.
const texto = document.getElementById('texto');
const lista = document.getElementById('lista');


const palabras = ['perrito', 'gatito', 'Futbol', 'Motos'];

const pintarLista = arr => {
  let cajita = '';
  for (let index = 0; index < arr.length; index++) {
    cajita += `<li>${arr[index]}</li>`;
  };
  lista.innerHTML = cajita;
};

pintarLista(palabras);

texto.addEventListener('keyup', () => {
  let result = [];
  for (let index = 0; index < palabras.length; index++) {
    const palabra = palabras[index].toUpperCase();
    const ingresado = texto.value.toUpperCase();
    if(palabra.includes(ingresado)){
      result.push(palabras[index]);
    }
  }
  pintarLista(result);
})

