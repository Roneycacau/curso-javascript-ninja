let objet = {};
let pessoa = {
    nome:'Roney', 
    sobrenome:'cacau', 
    sexo:'m', 
    idade:30, 
    altura:1.75,
    peso:90,
    andando:false,
    caminhouQuantosMetros:0
}

pessoa.fazerAniversario = function(){
    pessoa.idade++;
}

pessoa.andar = function(metros){
    pessoa.andando = true;
    pessoa.caminhouQuantosMetros += metros;
}
pessoa.parar = function(){
    pessoa.andando = false;
}
pessoa.nomeCompleto = pessoa.nome + ' ' + pessoa.sobrenome;

pessoa.mostrarIdade = function(){
    return 'Olá, eu tenho ' + pessoa.idade + ' anos';
}
pessoa.mostrarPeso = function(){
    return 'Eu peso ' + pessoa.peso + 'Kg';
}
pessoa.mostrarAltura = function(){
    return 'Minha altura é' + pessoa.altura + 'm';
}
pessoa.apresentacao = function(){
    let artigo = pessoa.sexo === 'f'?'a':'o';
    let anos = pessoa.idade > 1? 'anos':'ano';
    let andou = pessoa.caminhouQuantosMetros>1?'metros':'metro';
    return "Olá, eu sou " + artigo + " " + pessoa.nomeCompleto + ", tenho " + pessoa.idade + " " + anos + ", " + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + " " + andou + "!";
}
pessoa.apresentacao()