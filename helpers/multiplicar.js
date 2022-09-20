const fs = require("fs");
const colors = require('colors')

const crearArchivoTabla = async (base, listar, hasta) => {
    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.magenta} ${i} ${'='.magenta} ${base * i}\n`;
        }

        if (listar) {
            console.log("======================".cyan.bold);
            console.log("    Tabla del: ".magenta, colors.magenta.bold(base));
            console.log("======================".cyan.bold);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Archivo "tabla-${base}"`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivoTabla,
};
