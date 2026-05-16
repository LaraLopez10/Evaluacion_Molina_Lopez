const BibliotecaController = require("./controllers/BibliotecaController");
const BibliotecaView = require("./views/BibliotecaView");

const MultaNormal = require("./models/estrategias/MultaNormal");
const MultaPremium = require("./models/estrategias/MultaPremium");

// Crear controlador y vista
const controller = new BibliotecaController();
const view = new BibliotecaView();

try {

    // Crear estrategias
    const estrategiaNormal = new MultaNormal();

    const estrategiaPremium = new MultaPremium(
        new MultaNormal()
    );

    // Agregar libros
    controller.agregarLibro("Harry Potter", estrategiaNormal);
    controller.agregarLibro("El Principito", estrategiaPremium);

    // Mostrar libros
    const libros = controller.obtenerLibros();
    view.mostrarLibros(libros);

    // Calcular multas
    const multa1 = controller.calcularMulta("Harry Potter", 3);
    view.mostrarMulta("Harry Potter", multa1);

    const multa2 = controller.calcularMulta("El Principito", 3);
    view.mostrarMulta("El Principito", multa2);

} catch (error) {

    view.mostrarMensaje(error.message);

}