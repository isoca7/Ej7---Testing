import { obtenerEstadoPartida, obtenerValorCarta, obtenerPuntosCarta} from './motor'

import { it, describe, expect } from 'vitest'

import * as modelo from './modelo'

import { vi } from 'vitest'

describe('obtenerEstadoPartida', () => {
  it('Debe retornar el mensaje correcto cuando la puntuación es 7.5', () => {
    //Arrange
    vi.spyOn(modelo, 'puntuacion', 'get').mockReturnValue(7.5)

    //Act
    const resultado = obtenerEstadoPartida()
    //Assert
    expect(resultado).toBe(`JUSTO_MAXIMA`)
  })

  it('Debe retornar el mensaje correcto cuando la puntuación es menor a 7.5', () => {
    //Arrange
    vi.spyOn(modelo, 'puntuacion', 'get').mockReturnValue(3.5)

    //Act
    const resultado = obtenerEstadoPartida()
    expect(resultado).toBe(`POR_DEBAJO_MAXIMO`)
  })

  it('Debe retornar el mensaje correcto cuando la puntuación es más de 7.5', () => {
    //Arrange
    vi.spyOn(modelo, 'puntuacion', 'get').mockReturnValue(9)

    //Act
    const resultado = obtenerEstadoPartida()
    //Assert
    expect(resultado).toBe(`TE_HAS_PASADO`)
  })
})

describe('obtenerValorCarta', () => {
  it('Debe retornar un 10 cuando el numero generado es 8', () => {
    //Arrange
    const numero = 8

    //Act
    const resultado = obtenerValorCarta(numero)
    //Assert
    expect(resultado).toBe(10)
  })

  it('Debe retornar un 11 cuando el numero generado es 9', () => {
    //Arrange
    const numero = 9

    //Act
    const resultado = obtenerValorCarta(numero)
    //Assert
    expect(resultado).toBe(11)
  })
  it('Debe retornar un 12 cuando el numero generado es 10', () => {
    //Arrange
    const numero = 10

    //Act
    const resultado = obtenerValorCarta(numero)
    //Assert
    expect(resultado).toBe(12)
  })
  it('Debe retornar un 7 cuando el numero generado es 7', () => {
    //Arrange
    const numero = 7

    //Act
    const resultado = obtenerValorCarta(numero)
    //Assert
    expect(resultado).toBe(7)
  })
})

describe('obtenerPuntosCarta', () => {
    it('Debe retornar un 0,5 cuando la carta es 10 o más', () => {
      //Arrange
      const carta = 11
  
      //Act
      const resultado = obtenerPuntosCarta(carta)
      //Assert
      expect(resultado).toBe(0.5)
    })
  
    it('Debe retornar un 0,5 cuando la carta es 12', () => {
        //Arrange
        const carta = 12
    
        //Act
        const resultado = obtenerPuntosCarta(carta)
        //Assert
        expect(resultado).toBe(0.5)
      })
    
    it('Debe retornar un 1 cuando la carta es 1', () => {
      //Arrange
      const numero = 1
  
      //Act
      const resultado = obtenerValorCarta(numero)
      //Assert
      expect(resultado).toBe(1)
    })
    it('Debe retornar un 7 cuando la carta es 7', () => {
        //Arrange
        const numero = 7
    
        //Act
        const resultado = obtenerValorCarta(numero)
        //Assert
        expect(resultado).toBe(7)
      })
  })
