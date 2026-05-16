class MultaPremium {

    constructor(estrategiaBase) {
        this.estrategiaBase = estrategiaBase;
    }

    calcular(dias) {

        if (dias < 0) {
            throw new Error("Los días no pueden ser negativos");
        }

        // Usa la estrategia original
        const multaBase = this.estrategiaBase.calcular(dias);

        // Aplica descuento del 50%
        return multaBase * 0.5;
    }

}

module.exports = MultaPremium;