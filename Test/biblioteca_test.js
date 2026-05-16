const Libro = require("../models/Libro");

const Biblioteca = require("../models/Biblioteca");

const MultaNormal = require("../models/estrategias/MultaNormal");

const MultaPremium = require("../models/estrategias/MultaPremium");

describe("Tests del sistema Biblioteca", () => {

    test("Calcula correctamente multa normal", () => {

        const libro = new Libro(
            "Harry Potter",
            new MultaNormal()
        );

        expect(
            libro.calcularMulta(3)
        ).toBe(300);

    });

    test("Calcula correctamente multa premium", () => {

        const libro = new Libro(
            "El Principito",
            new MultaPremium()
        );

        expect(
            libro.calcularMulta(4)
        ).toBe(200);

    });

    test("Agrega libros correctamente a la biblioteca", () => {

        const biblioteca = new Biblioteca();

        biblioteca.libros = [];

        const libro = new Libro(
            "Clean Code",
            new MultaNormal()
        );

        biblioteca.agregarLibro(libro);

        expect(
            biblioteca.obtenerLibros().length
        ).toBe(1);

    });

    test("Singleton mantiene una única instancia", () => {

        const biblioteca1 = new Biblioteca();

        const biblioteca2 = new Biblioteca();

        expect(
            biblioteca1
        ).toBe(biblioteca2);

    });

});