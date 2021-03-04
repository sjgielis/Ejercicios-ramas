// // 🔍 Buscador
// // Crear un programa que muestre:

// // un input de texto
// // una lista ul
// // El programa debe tener como datos un array con strings con distintas palabras, y al inicializarse la lista debe mostrar las palabras del array como ítems de lista.

// // Al escribir en el input, se debe actualizar la lista para mostrar aquellas palabras que contengan como substring lo ingresado, ignorando mayúsculas y minúsuculas. Es decir, si se busca script y JavaScript es un string dentro del array, se debe mostrar.

// // Para actualizar la lista se debe:

// // borrar todo lo que contenga
// // recorrer el array y por cada ítem
// // insertar un ítem de lista li con el valor del ítem del array
// // Cuando el input no tienen ningún valor ingresado, la lista debe mostrar todos los ítems del array.

// // TIP: vas a necesitar dos arrays, uno para todas las palabras y otro para los resultados de búsqueda.
// const texto = document.getElementById('texto');
// const lista = document.getElementById('lista');


// const palabras = ['perrito', 'gatito', 'Futbol', 'Motos'];

// const pintarLista = arr => {
//   let cajita = '';
//   for (let index = 0; index < arr.length; index++) {
//     cajita += `<li>${arr[index]}</li>`;
//   };
//   lista.innerHTML = cajita;
// };

// pintarLista(palabras);

// texto.addEventListener('keyup', () => {
//   let result = [];
//   for (let index = 0; index < palabras.length; index++) {
//     const palabra = palabras[index].toUpperCase();
//     const ingresado = texto.value.toUpperCase();
//     if(palabra.includes(ingresado)){
//       result.push(palabras[index]);
//     }
//   }
//   pintarLista(result);
// })

// Total de gastos
// Crear un programa que muestre:

// un input de números
// un botón que diga Agregar gasto/ganancia
// una lista ul
// un elemento p
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento p.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// El elemento p se actualiza con el total de la suma de los valores del array.

const moneda = document.getElementById('moneda');
const agregar = document.getElementById('agregar');
const gastos = document.getElementById('gastos');
const total = document.getElementById('total');

let arreglo = [];

agregar.addEventListener('click', () => {
  arreglo.push(moneda.value);
  pintarArreglo(arreglo);
})

const pintarArreglo = arr => {
  let totalMoneda = 0;
  let cajita = '';
  for (let index = 0; index < arr.length; index++) {
    cajita += `<li>${arr[index]}</li>`
    console.log(totalMoneda += parseInt(arr[index]))
  }
  gastos.innerHTML = cajita;
  total.innerHTML = `El total de los gastos es de:$${totalMoneda}`;
  moneda.value = '';
}
