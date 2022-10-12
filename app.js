console.log("Hola, soy la consola");

/* TODO:
    -Mejorar funcionalidad (botón de quitar producto)
    -Agregar resumen de compra al botón de finalizar
    -Mejorar presentación del documento HTML
    -Embellecer
*/

// para seleccionar elementos del DOM
const carro = document.getElementById("carro");
const botones = document.querySelectorAll(".card .btn");

// para utilizar el template del documento
const templateLista = document.getElementById("templateLista");

// fragmento para evitar reflow
const fragment = document.createDocumentFragment();

const carritoObjetos = {};

/* Receptor del evento click en el botón, crea un objeto (productos) usando el dataset,
acciona la función imprimirCarro, el if utiliza el título leído del dataset para sumar cantidad.
*/
const agregarCarrito = (e) => {
  const productos = {
    titulo: e.target.dataset.info,
    id: e.target.dataset.info,
    cantidad: 1,
  };

  if (carritoObjetos.hasOwnProperty(productos.titulo)) {
    productos.cantidad = carritoObjetos[productos.titulo].cantidad + 1;
  }

  carritoObjetos[productos.titulo] = productos;
  imprimirCarro(productos);
};

/* función imprimirCarro.
Imprime el template sacado del html para agregarlo al DOM.
Utiliza un forEach para iterar por cada botón, agregando dicho elemento al documento.
Utilizamos clone para evitar problemas cuando modificamos el template.
Para evitar que se agregue sin limpiar, agregamos un textContent vacío.
*/
const imprimirCarro = () => {
  carro.textContent = "";

  Object.values(carritoObjetos).forEach((i) => {
    const clone = templateLista.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = i.titulo;
    clone.querySelector(".badge").textContent = i.cantidad;

    fragment.appendChild(clone);
  });

  carro.appendChild(fragment);
};

// Evento de clickear el botón
botones.forEach((btn) => btn.addEventListener("click", agregarCarrito));
