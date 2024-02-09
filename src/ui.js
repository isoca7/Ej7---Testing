import confetti from "canvas-confetti";
import { generarNumeroAleatorio, obtenerValorCarta, obtenerPuntosCarta, sumaPuntos, obtenerEstadoPartida } from "./motor";
import { puntuacion, mensajeResultado,siguienteCarta, containerBotones,  botonDarCarta, setPuntuacion, JUSTO_MAXIMA, TE_HAS_PASADO  } from "./modelo";

export const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById('puntuacion')

  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `<h3>Tu puntuación es: <span>${puntuacion}</span></h3>`
  }
}

export const obtenerUrlCarta = (carta) => {
  switch (carta) {
    case 1:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg'
    case 2:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg'
    case 3:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg'
    case 4:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg'
    case 5:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg'
    case 6:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg'
    case 7:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg'
    case 10:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg'
    case 11:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg'
    case 12:
      return 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg'
  }
}

export const pintarUrlCarta = (urlCarta) => {
  const elementoImg = document.getElementById('carta')

  if (elementoImg !== null && elementoImg !== undefined) {
    elementoImg.src = urlCarta
  }
}

export const obtenerMensajeResultado = (puntuacion) => {
  if (puntuacion <= 4.5) {
    return `<p>Has sido muy conservador</p>`
  } else if (puntuacion >= 5 && puntuacion < 6) {
    return `<p>Te ha entrado el canguelo eh?</p>`
  } else if (puntuacion >= 6 && puntuacion <= 7) {
    return `<p>Casi casi...</p>`
  } else if (puntuacion === 7.5) {
    return `<p class='rainbow'>"¡Lo has clavado! ¡Enhorabuena!"</p>`
  }
}

export const mostrarQueHubiesesSacado = () => {
  const numeroAleatorio = generarNumeroAleatorio()
  const carta = obtenerValorCarta(numeroAleatorio)
  const urlCarta = obtenerUrlCarta(carta)
  siguienteCarta.innerHTML = `<p>Hubieses sacado un ${carta}</p>`
  pintarUrlCarta(urlCarta)
}

export const mostrarMensajeResultado = (textoMensaje) => {
  const mensajeResultado = document.getElementById('resultado')
  if (mensajeResultado) {
    mensajeResultado.innerHTML = textoMensaje
  }
}

const quitarBotones = () => {
  botonDarCarta.remove()
}
const reloadpagina = () => {
  location.reload()
}
export const reiniciarJuego = () => {
  quitarBotones()
  containerBotones.innerHTML = `<button type="button" id="reiniciar">Nueva partida 🎇</button>`
  const botonReiniciar = document.getElementById('reiniciar')
  botonReiniciar.addEventListener('click', reloadpagina)
}
const ganarPartida = () => {
  const mensaje = obtenerMensajeResultado(puntuacion)
  mostrarMensajeResultado(mensaje)
  reiniciarJuego()
  confetti()
}

const perderPartida = () => {
  if (mensajeResultado) {
    mensajeResultado.innerHTML = `<p style='color:black; font-size: 3em; text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff'>Game over!</p>`
  }
  reiniciarJuego()
}
export const gestionarPartidas = () => {
  if (obtenerEstadoPartida()===JUSTO_MAXIMA) {
    ganarPartida()
  }

  if (obtenerEstadoPartida()===TE_HAS_PASADO) {
    perderPartida()
  }
}

export const handleBotonDameCarta = () => {
  const numeroAleatorio = generarNumeroAleatorio()
  const carta = obtenerValorCarta(numeroAleatorio)
  const puntosCarta = obtenerPuntosCarta(carta)
  const puntosSumados = sumaPuntos(puntosCarta)
  const urlCarta = obtenerUrlCarta(carta)
  pintarUrlCarta(urlCarta)
  setPuntuacion(puntosSumados)
  gestionarPartidas()
  muestraPuntuacion()
}

export const handleBotonParar = () => {
  const mensaje = obtenerMensajeResultado(puntuacion)
  mostrarMensajeResultado(mensaje)
  mostrarQueHubiesesSacado()
  reiniciarJuego()
}
