//querySelector: função que busca o elemento pelo seletor


function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') { //!= null não é obrigatório
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido!');
    }

}

// seleciona todos os elementos da lista que usam a classe .tecla, guardada
// em uma constante que será a referencia para essa lista
const listaDeTeclas = document.querySelectorAll('.tecla');

/*
============================================
Código com while
//armazena o valor do indice
let contador = 0;
while (contador < listaDeTeclas.length){

    //lista das teclas (<button class="tecla tecla_pom">Pom</button>) 
    //de acordo com o indice/contador
    const tecla = listaDeTeclas[contador];
    

    //classList retorna lista, no caso, lista de teclas declarado acima
    //ex: tecla_pom
    const instrumento = tecla.classList[1];
   

    //template string, ${} faz uma abertura para o codigo JS de dentro da
    //string.
    // #som = id do audio
    const idAudio = `#som_${instrumento}`;

    //funçao anonima: nao tem possuem nome pois são utlizadas em um contexto 
    //em que são o valor de algum atributo ou estão sendo armazenadas dentro de
    //alguma referencia, constante ou variável.
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador++;
}
============================================
*/

//Refatorando

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code == 'Space' || evento.code == 'Enter') {//code vem do console
        tecla.classList.add('ativa');
        }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    }
}