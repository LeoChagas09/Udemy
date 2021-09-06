"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
console.log('=== n-fatorial ===');
const argv = require('yargs').demandOption('num').argv;
/*console.log(`Executando o script a partir do diretorio ${process.cwd()}`)

process.on('exit', () => {
    console.log('script está prestes a terminar')
}) */
const num = argv.num;
console.log(`O Fatorial de ${num} é igual a ${(0, fatorial_1.fatorial)(num)}`);
//console.log(module.paths)
//# sourceMappingURL=main.js.map