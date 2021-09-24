const dadosCliente1: readonly [number, string] = [1, 'Ronald'];
const dadosCliente2: [number, string, string] = [1, 'Ronald', 'Silva'];
const dadosCliente3: [number, string, ...string[]] = [
  1,
  'Ronald',
  'Silva',
  'Alves',
];

dadosCliente2.pop();
// dadosCliente1.pop(); => não é possivel ser alterado por causa do readonly
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

//readonly
const array1: readonly string[] = ['Ronald', 'Silva'];
const array2: ReadonlyArray<string> = ['Ronald', 'Silva'];

console.log(array1);
console.log(array2);
