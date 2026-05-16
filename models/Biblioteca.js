class Biblioteca {

    constructor() {

        // Implementación del patrón Singleton
        if (Biblioteca.instance) {
            return Biblioteca.instance;
        }

        this.libros = [];

        Biblioteca.instance = this;
    }

    agregarLibro(libro) {

        if (!libro) {
            throw new Error("El libro es obligatorio");
        }

        this.libros.push(libro);
    }

    obtenerLibros() {
        return this.libros;
    }

    buscarLibroPorTitulo(titulo) {

        return this.libros.find(libro => libro.titulo === titulo);
    }

}

module.exports = Biblioteca;