
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)

}

ajustaTamanhoPalcoJogo()

var posicaoX = (Math.random() * largura) - 90
var posicaoY = (Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX , posicaoY)

//criar o elemento HTML
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = 'mosca'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)

