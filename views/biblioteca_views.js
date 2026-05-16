class BibliotecaView {

    mostrarMensaje(mensaje) {
        console.log(mensaje);
    }

    mostrarLibros(libros) {

        console.log("\n📚 LISTA DE LIBROS:");

        if (libros.length === 0) {
            console.log("No hay libros cargados.");
            return;
        }

        libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo}`);
        });

    }

    mostrarMulta(titulo, multa) {

        console.log(
            `La multa del libro "${titulo}" es de $${multa}`
        );

    }

}

module.exports = BibliotecaView;