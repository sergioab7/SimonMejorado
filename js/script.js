const btnPlay = document.querySelector(".btnPlay");
const mostrarNivel = document.querySelector(".mostrarNivel");

btnPlay.addEventListener("click", empiezaJuego);
let status = null;

function empiezaJuego(){
    console.log("Empieza!");
    mostrarNivel.classList.toggle("desaparece");
}