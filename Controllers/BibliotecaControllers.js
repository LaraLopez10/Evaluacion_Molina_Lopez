const Biblioteca = require("../models/Biblioteca");
const Libro = require("../models/Libro");

class BibliotecaController {

    constructor() {
        this.biblioteca = new Biblioteca();
    }

    agregarLibro(titulo, estrategiaMulta) {

        if (!titulo) {
            throw new Error("El título es obligatorio");
        }

        const libro = new Libro(titulo, estrategiaMulta);

        this.biblioteca.agregarLibro(libro);

        return libro;
    }

    obtenerLibros() {
        return this.biblioteca.obtenerLibros();
    }

    buscarLibro(titulo) {

        if (!titulo) {
            throw new Error("Debe ingresar un título");
        }

        return this.biblioteca.buscarLibroPorTitulo(titulo);
    }

    calcularMulta(titulo, dias) {

        const libro = this.buscarLibro(titulo);

        if (!libro) {
            throw new Error("Libro no encontrado");
        }

        return libro.calcularMulta(dias);
    }

}

module.exports = BibliotecaController;