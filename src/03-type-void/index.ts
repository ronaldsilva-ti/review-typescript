// void => quando uma funcao ou um metodo não tem retorno
function semRetorno(...args: string[]): void {
  // console.log(args.join(' '));
}

const pessoa = {
  nome: 'Ronald',
  sobrenome: 'Alves',

  exibirNome(): void {
    // console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Ronald', 'Silva');
pessoa.exibirNome();

export { pessoa };
