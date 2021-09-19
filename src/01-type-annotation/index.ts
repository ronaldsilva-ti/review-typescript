/* eslint-disable */
// Tipos Básicos

let nome: string = 'Ronald'; //Qualquer tipo de strings: '', ``, ""
let idade: number = 20; //10, 1.57 -5.55, 0xf00d, 0b1010
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
//let big: bigint = 10n;//bigint

// Arrays
let arrayNumeros: Array<number> = [1, 2, 3];
let arrayNumeros2: number[] = [1, 2, 3];
let arrayString: Array<string> = ['a', 'b'];
let arrayString2: string[] = ['c', 'd'];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 20,
  nome: 'Ronald',
};

// Funcoes
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
