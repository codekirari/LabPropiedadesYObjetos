// Ejercicio 2: Lista de Compras (Array + for)
// Gestionar una lista dinámica de productos.
// Tareas:
// 1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
// 2.Añade 3 productos con el método agregar().
// 3.Implementa el método mostrar() que use un for para listar los productos numerados (ej: 
// "1. Manzanas").
// 4.Muestra la lista completa en consola


// 1 Crear el constructor 

function ListaCompras() {
    this.productos = [];
//2.metodo agregar
  this.agregar = function(producto) {
    this.productos.push(producto);
  };  

  // 3. método para mostrar los productos
  this.mostrar = function() {
    console.log("Lista de compras:");
    for (let i = 0; i < this.productos.length; i++) {
      console.log(`${i + 1}. ${this.productos[i]}`);
    }
  };
}

// creamos nueva lista
const lista = new ListaCompras();

// agregar productos
lista.agregar("Manzanas");
lista.agregar("Leche");
lista.agregar("Pan");

// mostrar la lista de compras
lista.mostrar();
