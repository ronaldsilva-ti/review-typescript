// never => aquela funcao ou metodo nunca vai retornar nada, porém pode travar a aplicacao, pode ser por um erro
export function criarErro(): never {
  throw new Error('Error');
}
criarErro();
