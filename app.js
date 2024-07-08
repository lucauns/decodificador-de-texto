
let textoSaida =""
let textoEntrada=""
mostraBotao("none");

function criptografar() {
    textoSaida="";
    trocaLetra();
    apagaImagem();
    mostraResposta('.texto__resposta', textoSaida);
    mostraBotao("block");
    console.log(textoEntrada);
    console.log(textoSaida);
}

function descriptografar () {
    textoSaida ="";
    destrocaLetra();
    apagaImagem();
    mostraResposta('.texto__resposta', textoSaida);
    console.log(textoEntrada);
    console.log(textoSaida);
}

   

function trocaLetra() {
    textoEntrada = document.querySelector('textarea').value;
    for (let i=0; i < textoEntrada.length; i++) {
        if (textoEntrada[i] == "e") {
            textoSaida += "enter";
        } else if (textoEntrada[i] == "i") {
            textoSaida+= "imes";
        } else if (textoEntrada[i] == "a") {
            textoSaida += "ai";
        } else if (textoEntrada[i] == "o") {
            textoSaida += "ober";
        } else if (textoEntrada[i] == "u") {
            textoSaida += "ufat";
        } else {
            textoSaida += textoEntrada[i];
        }
    }
}

function destrocaLetra(){
    textoEntrada = document.querySelector('textarea').value;
    for (let i =0; i < textoEntrada.length; i++) {
        if (textoEntrada.substring(i, i + 2) === 'ai') {
            textoSaida += 'a';
            i += 1;
        } else if (textoEntrada.substring(i, i + 5) === 'enter') {
            textoSaida += 'e';
            i += 4;
        } else if (textoEntrada.substring(i, i + 4) === 'imes') {
            textoSaida += 'i';
            i += 3;
        } else if (textoEntrada.substring(i, i + 4) ==="ober") {
            textoSaida += 'o';
            i += 3;
        }else if (textoEntrada.substring(i, i + 4) === 'ufat') {
            textoSaida += 'u';
            i += 3;
        } else {
            textoSaida += textoEntrada[i];
        }
        
    }
}

function apagaImagem() {
    document.getElementById("resposta").style.visibility = "hidden"
}

function mostraResposta(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mostraBotao(valor) {
    document.getElementById('copia').style.display = valor;
}

function copiar() {
    navigator.clipboard.writeText(textoSaida);
}