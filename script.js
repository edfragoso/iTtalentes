class Usuario {
  constructor(nome, dataNascimento, email, senha) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.email = email;
    this.senha = senha;
    this.idade = 0;
    this.maioridade = false;
  }

  calcularIdade() {
    const [dia, mes, ano] = this.dataNascimento.split("/");
    const dataNascimento = new Date(`${ano}-${mes}-${dia}`);
    const hoje = new Date();
    const diffAnos = hoje.getFullYear() - dataNascimento.getFullYear();
    const diffMeses = hoje.getMonth() - dataNascimento.getMonth();
    const diffDias = hoje.getDate() - dataNascimento.getDate();

    let idade = diffAnos;

    if (diffMeses < 0 || (diffMeses === 0 && diffDias < 0)) {
      idade--;
    }

    this.idade = idade;
  }

  verificarMaioridade() {
    this.maioridade = this.idade >= 18;
  }
}

const usuario1 = new Usuario(
  "Ednilson",
  "24/09/2008",
  "ednilson.fragoso@hotmail.com",
  "superSenha"
);

usuario1.calcularIdade();
usuario1.verificarMaioridade();
console.log(usuario1);
