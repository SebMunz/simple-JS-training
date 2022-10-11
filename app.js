console.log("Hola, soy la consola")

const carro = document.getElementById("carro");
const templateLista = document.getElementById("templateLista");
const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll(".card .btn");

const carritoObjetos = {}
const agregarCarrito = (e) => {console.log(e.target.dataset.info);
    const productos = {
        titulo: e.target.dataset.info,
        id: e.target.dataset.info,
        cantidad: 1   
    }
    carritoObjetos[productos.titulo] = productos;

    console.log(carritoObjetos);



}

botones.forEach((btn) => btn.addEventListener("click", agregarCarrito));