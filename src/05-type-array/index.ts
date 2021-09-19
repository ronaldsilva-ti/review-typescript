// Array<T> - T[]

function multiplicarArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

function soma1(x: number, y: number): number {
  return x + y;
}

const result = multiplicarArgs(1, 2, 3);
const upper = toUpperCase('ronald', 'silva');
const somar = soma1(1, 2);

console.log(result);
console.log(upper);
console.log(somar);
