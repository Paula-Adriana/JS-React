//. Você irá criar um botão que,
// ao ser clicado, faz aparecer esta lista

const desaparece = document.querySelector('#lista');
const aparece = document.querySelector('#lista');
desapareceTintas();

function mostraTintas () {
    aparece.style.display = "block";
};
// também criará um segundo botão que, ao ser 
//clicado, faz com que a lista de cores volte a sumir.

function desapareceTintas () {
    desaparece.style.display = "none";
}
/**
 * Outra forma
 * 
 * const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});
 */