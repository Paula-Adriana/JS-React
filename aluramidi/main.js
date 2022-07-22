function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
//chamando a função tocaSomPom dentro do onclick
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

//querySelector: função que busca o elemento pelo seletor
