const promtp = require('prompt-sync')();

let num1 = promtp('Digite o 1º número: ');
let num2 = promtp('Digite o 2º número: ');
let num3 = promtp('Digite o 3º número: ');
let num4 = promtp('Digite o 4º número: ');
let num5 = promtp('Digite o 5º número: ');
let num6 = promtp('Digite o 6º número: ');
let num7 = promtp('Digite o 7º número: ');
let num8 = promtp('Digite o 8º número: ');
let num9 = promtp('Digite o 9º número: ');
let num10 = promtp('Digite o 10º número: ');

/* --------- ATV 1. IMPRIMIR VERT. E HORIZ. --------- */

const numeros = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
console.log(numeros);
for (let i = 0; i <10; i++){
    console.log(numeros[i]);}

/* --------- ATV 2. INVERSO --------- */
let inverso = (numeros.reverse());
console.log(inverso);
