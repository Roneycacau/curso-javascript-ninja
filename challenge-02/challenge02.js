function soma(a,b){
    return a+b;
}

sum = soma(1,2) +5;
console.log(sum);
var bla;
function add(){
    bla=1;
    console.log( 'O valor da variável agora é ' + bla + '.')
}
console.log(bla)
add()
console.log(bla)
function tres(a,b,c){
    if(a===undefined ||b===undefined||c===undefined){
        return "Preencha os valores corretamente"
    }else{
        return a*b*c+2;
    }
}
tres(1,2);
tres(1, 2,3)

function otos3(a,b,c){
    if(a!==undefined && b===undefined && c==undefined){
        return a;
    }
    if(a!==undefined && b!==undefined && c===undefined){
        return a+b;
    }
    if(a!==undefined && b!==undefined && c!==undefined){
        return (a+b)/c;
    }else{
        return false;
    }
    return null;
}

otos3();
otos3(1);
otos3(1,2);
otos3(1,2,3);