const btnPlay = document.querySelector(".btnPlay");
const mostrarNivel = document.querySelector(".mostrarNivel");

const contenedorBotones = document.querySelector(".contenedorBotones");
const juegoFin = document.querySelector(".juegoFinalizado");
juegoFin.classList.add("desaparece");

const btnRed = document.querySelector("#red");
const btnOrange = document.querySelector("#orange");
const btnGreen = document.querySelector("#green");
const btnBlue = document.querySelector("#blue");

btnRed.addEventListener("click", buttonPressed);
btnOrange.addEventListener("click", buttonPressed);
btnGreen.addEventListener("click", buttonPressed);
btnBlue.addEventListener("click", buttonPressed);

btnPlay.addEventListener("click", empiezaJuego);
let estado = "";
let turno = 0;
let turnoMaquina = [];
let eleccionJugador = 0;

let botones = [btnRed, btnOrange, btnGreen, btnBlue];

function empiezaJuego(){
    console.log("Empieza!");
    mostrarNivel.classList.toggle("desaparece");
    btnPlay.classList.add("desaparece");

    maquinaEligeColor();
}

function maquinaEligeColor(){
    estado="turno-maquina";

    setTimeout(() => {
        turno += 1;
        mostrarNivel.innerHTML = "Turno: " + turno;
        let numeroRandom = Math.floor(Math.random() * 4);
        let boton = botones[numeroRandom];
    
        turnoMaquina = [...turnoMaquina, boton];
    
        iluminarBoton(boton);
        eleccionJugador = 0;
        estado="turno-jugador";
    },500)
}


function iluminarBoton(boton) { 
    boton.classList.toggle("agregado")
    setTimeout(() => {
        boton.classList.toggle("agregado");
    },100);
}


function buttonPressed(e){
    if(estado=="turno-jugador"){
        let button = e.target;

        if(button === turnoMaquina[eleccionJugador]){
            eleccionJugador++;
            iluminarBoton(button);
            if(eleccionJugador == turnoMaquina.length){
                maquinaEligeColor();
            }
        }else{
            estado='game-over';
            juegoFinalizado();
        }
    }   
}


function juegoFinalizado(){
    console.log("fionalizado");
    contenedorBotones.classList.add("desaparece");
    juegoFin.classList.remove("desaparece");

}