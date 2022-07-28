//. Você irá criar um botão que,
// ao ser clicado, faz aparecer esta lista
/**
const desaparece = document.querySelector('#lista');
const aparece = document.querySelector('#lista');
desapareceTintas();

function mostraTintas () {
    
};
// também criará um segundo botão que, ao ser 
//clicado, faz com que a lista de cores volte a sumir.

function desapareceTintas () {
    desaparece.style.display = "none";
}
=========================================================
 * Outra forma
 *  */

const lista = document.querySelector('.lista');
const aparece = document.querySelector('[data-mostra]');
aparece.addEventListener("click", () => {
  lista.style.display = "block";
});

const desaparece = document.querySelector('[data-oculta]');
desaparece.addEventListener("click", () => {
  lista.style.display = "none";;
});

