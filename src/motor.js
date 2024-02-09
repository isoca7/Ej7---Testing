import { puntuacion, setPuntuacion, JUSTO_MAXIMA, TE_HAS_PASADO, POR_DEBAJO_MAXIMO} from './modelo.js'


export const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10 + 1)
}

export const obtenerValorCarta = (numeroAleatorio) => {
  if (numeroAleatorio > 7) {
    numeroAleatorio += 2
  }
  return numeroAleatorio
}

export const obtenerPuntosCarta = (carta) => {
  return carta > 7 ? 0.5 : carta
}

export const sumaPuntos = (puntos) => {
  return setPuntuacion(puntuacion + puntos)
}

export const obtenerEstadoPartida = () => {
  if(puntuacion === 7.5){
    return JUSTO_MAXIMA
  } 
  if(puntuacion>7.5){
    return TE_HAS_PASADO
  } 
  return POR_DEBAJO_MAXIMO
}
