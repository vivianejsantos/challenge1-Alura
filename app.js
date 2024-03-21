// variaveis
const textarea = document.querySelector(".textarea");
const mensagem__resposta=document.querySelector(".mensagem__resposta");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// testar a lista
// let = matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
// mostrar no console
// console.table(matrizcodigo);

// essa não recebe parametro pois é só um procedimento
function btnEncriptar(){
    const textoEncriptado = encrypt(textarea.value);
    mensagem__resposta.value = textoEncriptado;
    var mensagemResposta = document.querySelector('.mensagem__resposta');
    mensagemResposta.style.backgroundImage = 'none';
    textarea.value="";
    textoEncriptado.value="";
}

// precisa ter um parametro pois ela vai pegar o valor e ser processada com a logica dentro da função
function encrypt(stringencripitada){
    let = matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    // para que respeite o requisito de que todas as letras receba letras minusculas
    stringencripitada = stringencripitada.toLowerCase();

    // laço para percorrer por toda a matriz

    for( let i=0;i<matrizcodigo.length;i++){
        if(stringencripitada.includes(matrizcodigo[i][0])){

            stringencripitada=stringencripitada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
        
        }
    }
    return stringencripitada;
    }
function btnDesencriptar(){
    const textDesencriptado = desencriptar(textarea.value);
    mensagem__resposta.value = textDesencriptado;
    textarea.value="";
}

function desencriptar(stringDesencriptar){
    let = matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i=0; i < matrizcodigo.length;i++){
        if (stringDesencriptar.includes(matrizcodigo[i][1])){
            stringDesencriptar=stringDesencriptar.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
        }
    }
    return stringDesencriptar;
}

function copiar(){
    document.getElementById("btn_copy").addEventListener("click",function(){
        document.getElementById("mensagem__resposta").select();
        document.execCommand('copy');
        mensagem__resposta.value="";
    
    }) 
}






