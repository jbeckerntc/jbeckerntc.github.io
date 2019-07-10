window.onload = function(){

    console.log("Se quiser me ver, Tem que pressionar F12! Console...");
    
    //Concatenação de strings com o símbolo +
    console.log("a = " + a + " b = " + b);
    console.log("a + b = " + parseInt(a+b) );

};

//Variável Global
var a = 2;
var b = 2;

let entradas = document.querySelectorAll('input');
let resposta = document.querySelector('.resposta');
let botão = document.querySelector('#btnSomar');



pegaNúmero1 = function(){
    return entradas[0].value;
}

pegaNúmero2 = function(){
    return entradas[1].value;
}

testarEntradasVazias = function(){
    //Se entrada1 ou entrada2 for vazio, retorna verdadeiro
    if(pegaNúmero1() === '' || pegaNúmero2() === '')
        return true;
    else
        return false;
}

somar = function(){
    if(testarEntradasVazias()){
        resposta.textContent = "Erro: Preencha os dois campos Numéricos";
        resposta.classList.remove('correta');
        resposta.classList.add('errada');
        return false;
    }
    else{
        atualizarResposta()
        resposta.classList.remove('errada');
        resposta.classList.add('correta');
    }
}

atualizarResposta = function(){
    let num1 = parseInt(pegaNúmero1());
    let num2 = parseInt(pegaNúmero2());
    var soma = parseInt(num1 + num2);
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
}

//Monitoramento do click no botão
//Quando o botão for clicado, a função somar será chamada!
botão.addEventListener('click',somar);