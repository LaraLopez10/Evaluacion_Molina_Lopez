class MultaNormal {

    calcular(dias) {

        if (dias < 0) {
            throw new Error("Los días no pueden ser negativos");
        }

        return dias * 100;
    }

}

module.exports = MultaNormal;