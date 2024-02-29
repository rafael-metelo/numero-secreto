let listaDeNumerosSorteados = [];
let numeroLimete = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNatela('h1' , 'Jogo do numero secreto');
    exibirTextoNatela('p' , 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNatela('h1' , 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas ' : 'tentaviva';
        let mensagemtentativas = `Você descobriu o número secreto! com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNatela('P' , mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
        exibirTextoNatela('p' , 'O numero secreto e menor!');
    }else{
        exibirTextoNatela('p' , 'O numero secreto e maior!');
    }
    tentativas++;
    limparcampo();
}
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimete + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimete){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparcampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' ,true);

}