let isThuthy = function(param) {
  return param ? true : false;
};

let carro = {
  marca: "auela",
  modelo: "s2",
  placa: "aaw2314",
  ano: 2042,
  cor: "cinza",
  quantasPortas: 1,
  assentos: 5,
  quantidadePessoas: 0
};

carro.mudaCor = function(cor) {
  this.cor = cor;
};

carro.obterCor = function() {
  console.log(this.cor);
};
carro.obterMarca = function() {
  console.log(this.marca);
};

carro.obterMarcaModelo = function() {
  console.log("Esse carro é um " + this.marca + " " + this.modelo + "");
};
carro.assentos = 5;

carro.adicionarPessoas = function(pessoas) {
  if (
    pessoas <= this.assentos &&
    pessoas + this.quantidadePessoas <= this.assentos
  ) {
    this.quantidadePessoas += pessoas;
    console.log("Temos " + this.quantidadePessoas + " no carro");
  } else {
    let cabe = this.assentos > 1 ? "cabem" : "cabe";
    let pessoas = this.assentos > 1 ? "pessoas" : "pessoas";
    let mensagem =
      this.assentos === 0
        ? "O carro está lotado"
        : "Só cabem " + this.assentos + " pessoas";
    console.log(mensagem);
  }
};
carro.removerPessas = function(pessoas) {
  if (pessoas > this.quantidadePessoas) {
    console.log("tem menos gente no carro do que isso aí");
  } else {
    this.quantidadePessoas -= pessoas;
    let mensagem =
      this.quantidadePessoas === 0
        ? "removido todas as pessoas do carro"
        : "removido " + pessoas + " do carro";
    console.log(mensagem);
  }
};
console.log(carro);
carro.obterCor();
carro.mudaCor("vermelho");
carro.obterCor();
carro.mudaCor("verde musgo");
carro.obterMarcaModelo();
carro.adicionarPessoas(2);
carro.adicionarPessoas(4);
carro.adicionarPessoas(3);
carro.removerPessas(4);
carro.adicionarPessoas(10);
console.log(carro.quantidadePessoas);
