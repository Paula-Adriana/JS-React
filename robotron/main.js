//o addEventListener sempre espera duas coisas: um clique
// e o que ela vai fazer. Armazenar dentro de uma função:
//robotron.addEventListener("click", (evento) => {
//    console.log(evento)
//});

//data-controle add ao html para desacoplar do JS. Alterando lá, 
//não precisa alterar aqui.

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
    
}

const controle = document.querySelectorAll("[data-controle]")
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        /**
         * target = no elemento que foi clicado
         * textContent = altera elemento do tipo texto, se for do tipo input
         * usa value para alterar.
         * dataset = relacionado com o data-controle
         * parentNode = pai do elemento que foi clicado (controle)
         */
        atualizaEstatistica(evento.target.dataset.peca)
        
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")//input

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

const estatistica = document.querySelectorAll("[data-estatistica]")
function atualizaEstatistica(peca) {
    
    //console.log(pecas[peca])
    estatistica.forEach( (elemento) => {
        //console.log(elemento.dataset.estatistica)
        //console.log(elemento.textContent)
        
        //ao clicar em cada elemento, quero atualizar o text content, o que ele vai receber:
        //o valor atual
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        // como vem em forma de texto, fazer parseInt para numero, e somar a isso o elemento do valor
        //da posicao do objeto que eu quero
        // somar do array pecas na posicao peca escolhida no item elemento
    })
}
    
function trocaImagem(cor){
    document.querySelector(".robo").src="/img/" + cor + ".png";
 }