import { botonDarCarta, botonParar } from "./modelo";

import { muestraPuntuacion,  handleBotonDameCarta, handleBotonParar } from "./ui";

function iniciarPartida() {
    if(botonDarCarta && botonParar){
        botonDarCarta.addEventListener("click", handleBotonDameCarta);
        botonParar.addEventListener("click", handleBotonParar);
    }
   
    muestraPuntuacion()
    
}

document.addEventListener("DOMContentLoaded", iniciarPartida);


