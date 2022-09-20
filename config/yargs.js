const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla por consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Podemos indicar hasta que numero queremos que se haga la tabla'
            })
            .check((argv, options) => {
                if(isNaN(argv.h)){
                    throw 'Tienes que indicar hasta que numero multiplicaremos la base'
                }
                return true;
            })
            .argv

module.exports = argv;