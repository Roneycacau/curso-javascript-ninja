# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isThuthy  = function(param){
    return param?true:false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isThuthy(false)
isThuthy('')
isThuthy(0)
isThuthy(-0)
isThuthy(undefined)
isThuthy(NaN)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isThuthy(true)
isThuthy(1)
isThuthy(1)
isThuthy(1+1)
isThuthy([])
isThuthy({})
isThuthy('sdas')

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {
    marca:'auela',
    modelo: 's2',
    placa: 'aaw2314',
    ano: 2042,
    cor: 'cinza',
    quantasPortas: 1,
    assentos:5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(cor){
    this.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
?

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterCor = function() {
  console.log(this.cor);
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
  console.log(this.marca);
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
  console.log("Esse carro é um " + this.marca + " " + this.modelo);
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
?

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor();


// Mude a cor do carro para vermelho.
carro.mudaCor("vermelho");


// E agora, qual a cor do carro?
carro.obterCor();


// Mude a cor do carro para verde musgo.
carro.mudaCor("verde musgo");


// E agora, qual a cor do carro?
carro.obterCor();


// Qual a marca e modelo do carro?
carro.obterMarcaModelo();


// Adicione 2 pessoas no carro.
carro.obterMarcaModelo();


// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(2);


// Faça o carro encher.
carro.adicionarPessoas(3);


// Tire 4 pessoas do carro.
carro.removerPessas(4);


// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10);


// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);

```
