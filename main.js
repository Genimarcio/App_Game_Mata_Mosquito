
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?' , '')

console.log(nivel)

if(nivel === 'facil'){
    criaMosquitoTempo = 2000
}else if(nivel === 'normal'){
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

var criaMosquito = setInterval(function() {
    

    function posicaoRandomica(){

        //remover o mosquito anterior (caso exista)
        if(document.getElementById('mosquito')){
            document.getElementById('mosquito').remove()

            if(vidas > 3){

                window.location.href = 'fim_do_jogo.html'

            }else{

                document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++

            }

        }

        var posicaoX = (Math.random() * largura) - 90
        var posicaoY = (Math.random() * altura) - 90
    
        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY
    
        console.log(posicaoX , posicaoY)
    
        //criar o elemento HTML
        var mosquito = document.createElement('img')
        mosquito.src = 'imagens/mosca.png'
        mosquito.className = tamanhoAleatorio()+ ' ' + ladoAleatorio()
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY + 'px'
        mosquito.style.position = 'absolute'
        mosquito.id = 'mosquito'
        mosquito.onclick = function() {
            this.remove()
        }
    
        document.body.appendChild(mosquito)
    
        console.log(tamanhoAleatorio())
    
        console.log(ladoAleatorio())
        
    
    
    }

    posicaoRandomica()

}, criaMosquitoTempo);




function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }

}



