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
  
  const btnMostrarTabela = document.querySelector("#mostrar-tabela");
  const tabela = document.querySelector("table");
  
  btnMostrarTabela.addEventListener("click", function () {
    // Verificar se todos os campos de entrada estão preenchidos
    const nome = form.elements.nome.value;
    const dataNascimento = form.elements.dataNascimento.value;
    const email = form.elements.email.value;
    const senha = form.elements.senha.value;
    
    if (!nome || !dataNascimento || !email || !senha) {
      alert("Por favor, preencha todos os campos para prosseguir.");
      return;
    }
    
    tabela.style.display = "block";
  });
  
  const form = document.querySelector("form");
  const tbody = document.querySelector("tbody");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nome = form.elements.nome.value;
    const dataNascimento = form.elements.dataNascimento.value;
    const email = form.elements.email.value;
    const senha = form.elements.senha.value;
  
    const usuario = new Usuario(nome, dataNascimento, email, senha);
    usuario.calcularIdade();
    usuario.verificarMaioridade();
  
    const tr = document.createElement("tr");
    const tdNome = document.createElement("td");
    const tdDataNascimento = document.createElement("td");
    const tdEmail = document.createElement("td");
    /* const tdSenha = document.createElement("td"); */
    const tdIdade = document.createElement("td");
    const tdMaioridade = document.createElement("td");
  
    tdNome.textContent = usuario.nome;
    tdDataNascimento.textContent = dataNascimento.split("-").reverse().join("/");
    tdEmail.textContent = usuario.email;
    /* tdSenha.textContent = usuario.senha; */
    tdIdade.textContent = usuario.idade;
    tdMaioridade.textContent = usuario.maioridade ? "Sim" : "Não";
  
    tr.appendChild(tdNome);
    tr.appendChild(tdDataNascimento);
    tr.appendChild(tdEmail);
    /* tr.appendChild(tdSenha); */
    tr.appendChild(tdIdade);
    tr.appendChild(tdMaioridade);
  
    tbody.appendChild(tr);
    form.reset();
  });