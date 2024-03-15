var numSlide = 1
var ns
mostrarSlide(numSlide)

function mudarSlide(ns){
    mostrarSlide(numSlide += ns);
}

function slideAtual(ns){
    mostrarSlide(numSlide = ns)
}

function mostrarSlide(ns){
    var items = document.getElementsByClassName('item')
    var indicadores = document.getElementsByClassName('indicador')

    if(ns > slides.length){
        numSlide = 1
    }


    for(var i=0; i < slides.length;i++){
        items.style.transform = 'translateX(${-numSlide * 500}px)'
    }

    for(var i = 0; i < indicadores.length;i++){
        indicadores[i].className = indicadores[i].className.replace('ativo','')

    }

    items[numSlide-1].style.transform = 'translateX(${(numSlide -1)* -500}px)'
    indicadores[numSlide-1].className += ' ativo'


}