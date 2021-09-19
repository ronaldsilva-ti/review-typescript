const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveC = 'Valor C';
objetoA.chaveD = 'Valor D';
// objetoA.chaveA = 'Teste';
// readonly => valor não pode ser alterado
// console.log(objetoA);
