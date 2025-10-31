// Ejercicio 1:  Libro (Objeto básico + if)
// Crear un sistema de préstamo de libros.
// Tareas:
// 1.Usa el constructor Libro para crear un objeto con 
// título y autor.
// 2.Agrega una propiedad prestado = false.
// 3.Implementa el método prestar() que:
// •Cambie prestado a true si el libro está disponible.
// •Muestre un mensaje de error si ya está prestado (usando if).
// 4.Prueba prestar el libro dos veces y observa los mensajes

//1 y 2. crear el constructor  y la propiedad

function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

//3. implementar metodo prestar

    this.prestar = function() {
        if (!this.prestado) {
            this.prestado = true;
            return `"${this.titulo}" ha sido prestado.`;
        } else {
            return `Error: "${this.titulo}" ya está prestado.`;
        }
    };
};

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");

console.log(libro1.prestar()); // prestarse
console.log(libro1.prestar()); // error

