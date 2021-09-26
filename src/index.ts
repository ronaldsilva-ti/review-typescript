// enum => estrutura de dados não ordenada
enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

enum Cores1 {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 300,
  // VERDE = 'String',
  // ROXO = 200,
}

enum Cores1 {
  BRANCO,
  LARANJA,
}

function escolhaCor(cor: Cores1): void {
  console.log(Cores1[cor]);
}
escolhaCor(Cores1.VERMELHO);

console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores1);
