// Imprimir tabla del 5 por consola

// for (let i = 1; i <= 10; i++) {
//     const resultado = 5*i
//     console.log('5 x ', i, '= ',resultado);
// }

const colors = require('colors')
const { crearArchivoTabla } = require("./helpers/multiplicar");
const argv = require('./config/yargs')
console.clear();

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

// console.log(process.argv);
// console.log('base: yargs', argv.b);

// console.log(`Base: ${base}`);

// const base = 5;

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
