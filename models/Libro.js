class Libro {

    constructor(titulo, estrategiaMulta) {
        this.titulo = titulo;
        this.estrategiaMulta = estrategiaMulta;
    }

    calcularMulta(dias) {

        if (dias < 0) {
            throw new Error("Los días no pueden ser negativos");
        }

        return this.estrategiaMulta.calcular(dias);
    }

}

module.exports = Libro;