//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}

//Inicializo arrays para las categorias de los productos
const perifericos = [];
const componentes = [];
const notebooks = [];

//Cargo el stock de productos segun su categoria
//perifericos
perifericos.push(new Producto("mouse razer", 1, 4000, "Negro", 30));
perifericos.push(new Producto("auriculares logitech", 2, 7400, "Blanco", 10));
perifericos.push(new Producto("teclado corsair", 3, 9000, "negro", 20));
perifericos.push(new Producto("auricular hyperx", 4, 11000, "rojo", 15));
//componentes
componentes.push(new Producto("procesador ryzen5", 5, 50000, "Negro", 20));
componentes.push(new Producto("tarjeta grafica 5500", 6, 10000, "Negro", 40));
componentes.push(new Producto("memoria ram 16gb", 7, 7000, "Negro", 40));
//notebooks
notebooks.push(new Producto("notebook asus", 8, 180000, "Negro", 10));
notebooks.push(new Producto("notebook samsung", 9, 130000, "blanca", 10));

//DOM

let sectionProductos = document.getElementById("section-productos");


function crearCard (producto) {
    
    let card = document.createElement("div");
    card.setAttribute("class", "card card-producto");
    card.style.width = "20rem";
    
    sectionProductos.appendChild(card);
    
    let cardImg = document.createElement("div");
    cardImg.innerHTML = `<img src="./imagenes/${producto.id}.jpg" class="card-img-top" alt="${producto.nombre}"></img>`;
    card.appendChild(cardImg);
    
    let cardBody = document.createElement("div");
    cardBody.innerHTML = `<h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text"> Precio: $${producto.precio} </p>
                            <button class="btn btn-dark">Comprar</button>`;
    card.appendChild(cardBody);
    cardBody.setAttribute("class", "card-body");
}


for (const periferico of perifericos) {
   crearCard(periferico);
}

for (const componente of componentes) {
    crearCard(componente);
}

for (const notebook of notebooks) {
    crearCard(notebook);
}








