// Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto 
// usando métodos y condicionales (if/else). 
// Tareas:
// 1. Crea un objeto Carrito usando una función constructora o clase que tenga:
// •Una propiedad productos (array vacío).
// •Una propiedad total (inicialmente 0).
// 2.Implementa estos métodos:
// •agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
// •calcularDescuento():
// •Si el total es mayor a $100, aplica un 10% de descuento y muestra.
// •Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
// •Si no, mostrar total, sin descuento.


function Carrito() {
  this.productos = [];
  this.total = 0;

  this.agregarProducto = function(nombre, precio) {
    this.productos.push({ nombre, precio });
    this.total += precio;
  };

  this.calcularDescuento = function() {
    if (this.total > 100) {
      const descuento = this.total * 0.10;
      const totalConDescuento = this.total - descuento;
      console.log(`Total original: $${this.total}. Descuento 10%. Total final: $${totalConDescuento}`);
    } else if (this.total > 50) {
      const descuento = this.total * 0.05;
      const totalConDescuento = this.total - descuento;
      console.log(`Total original: $${this.total}. Descuento 5%. Total final: $${totalConDescuento}`);
    } else {
      console.log(`Total sin descuento: $${this.total}`);
    }
  };
}

// pruebas
const carrito = new Carrito();

carrito.agregarProducto("Pan", 500);
carrito.agregarProducto("Huevo", 400);
carrito.agregarProducto("Cereal", 10000);

console.log(carrito.productos);
console.log("Total actual:", carrito.total);

carrito.calcularDescuento();
