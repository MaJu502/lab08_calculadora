/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-console */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Calculadora.css'
import { evaluate, number } from 'mathjs'

const Calculadora = () => {
  const [dato1, letDato1] = React.useState('')
  const [dato2, letDato2] = React.useState('')
  const [operador, letOperador] = React.useState('0')
  const [resultado, letResultado] = React.useState('')

  const mostrarResultado = () => {
    const tempOperador = operador
    let tempdato1 = dato1
    tempdato1 = number(tempdato1)
    let tempdato2 = dato2
    tempdato2 = number(tempdato2)
    console.log(tempdato1)
    console.log(tempdato2)
    if (tempOperador === '+') {
      letResultado(tempdato1 + tempdato2)
      letDato1('')
      letDato2('')
    } else if (tempOperador === '-') {
      letResultado(tempdato1 - tempdato2)
      letDato1('')
      letDato2('')
    } else if (tempOperador === 'x') {
      letResultado(tempdato1 * tempdato2)
      letDato1('')
      letDato2('')
    } else if (tempOperador === '/') {
      letResultado(tempdato1 / tempdato2)
      letDato1('')
      letDato2('')
    } else if (tempOperador === '%') {
      letResultado(tempdato1 % tempdato2)
      letDato1('')
      letDato2('')
    }
  }

  const ingresoDatos = (dato) => {
    console.log(dato)
    console.log('datos')
    console.log(dato1)
    console.log(dato2)
    if (operador === '') {
      console.log('ale me la come')
      if (dato === 1) {
        let temp = dato1
        temp += '1'
        letDato1(temp)
      } else if (dato === 2) {
        let temp = dato1
        temp += '2'
        letDato1(temp)
      } else if (dato === 3) {
        let temp = dato1
        temp += '3'
        letDato1(temp)
      } else if (dato === 4) {
        let temp = dato1
        temp += '4'
        letDato1(temp)
      } else if (dato === 5) {
        let temp = dato1
        temp += '5'
        letDato1(temp)
      } else if (dato === 6) {
        let temp = dato1
        temp += '6'
        letDato1(temp)
      } else if (dato === 7) {
        let temp = dato1
        temp += '7'
        letDato1(temp)
      } else if (dato === 8) {
        let temp = dato1
        temp += '8'
        letDato1(temp)
      } else if (dato === 9) {
        let temp = dato1
        temp += '9'
        letDato1(temp)
      } else if (dato === 0) {
        let temp = dato1
        temp += '0'
        letDato1(temp)
      } else if (dato === '.') {
        let temp = dato1
        temp += '.'
        letDato1(temp)
      } else if (dato === '+') {
        letOperador('+')
      } else if (dato === '-') {
        letOperador('-')
      } else if (dato === 'x') {
        letOperador('x')
      } else if (dato === '/') {
        letOperador('/')
      } else if (dato === '%') {
        letOperador('/')
      } else if (dato === '=') {
        mostrarResultado()
        console.log('cayatelaboca')
        console.log(resultado)
      } else if (dato === 'C') {
        letDato1('0')
        letDato2('0')
        letResultado('')
        console.log('reseteado')
      }
    } else if (operador !== '') {
      console.log('oscar me la jala')
      if (dato === 1) {
        let temp = dato2
        temp += '1'
        letDato2(temp)
      } else if (dato === 2) {
        let temp = dato2
        temp += '2'
        letDato2(temp)
      } else if (dato === 3) {
        let temp = dato2
        temp += '3'
        letDato2(temp)
      } else if (dato === 4) {
        let temp = dato2
        temp += '4'
        letDato2(temp)
      } else if (dato === 5) {
        let temp = dato2
        temp += '5'
        letDato2(temp)
      } else if (dato === 6) {
        let temp = dato2
        temp += '6'
        letDato2(temp)
      } else if (dato === 7) {
        let temp = dato2
        temp += '7'
        letDato2(temp)
      } else if (dato === 8) {
        let temp = dato2
        temp += '8'
        letDato2(temp)
      } else if (dato === 9) {
        let temp = dato2
        temp += '9'
        letDato2(temp)
      } else if (dato === 0) {
        let temp = dato2
        temp += '0'
        letDato2(temp)
      } else if (dato === '.') {
        let temp = dato2
        temp += '.'
        letDato2(temp)
      } else if (dato === '+') {
        letOperador('+')
      } else if (dato === '-') {
        letOperador('-')
      } else if (dato === 'x') {
        letOperador('x')
      } else if (dato === '/') {
        letOperador('/')
      } else if (dato === '%') {
        letOperador('/')
      } else if (dato === '=') {
        mostrarResultado()
        console.log('cayatelaboca')
        console.log(resultado)
      } else if (dato === 'C') {
        letDato1('0')
        letDato2('0')
        letResultado('')
        console.log('reseteado')
      }
    }
  }

  return (
    <div className="cuadro_calc">
      <div className="pantalla">
        <a className="contenido_pantalla">{resultado}</a>
      </div>
      <div className="grid_numeros">
        <button type="button" onClick={() => { ingresoDatos(7) }} className="botonc">7</button>
        <button type="button" onClick={() => { ingresoDatos(8) }} className="botonc">8</button>
        <button type="button" onClick={() => { ingresoDatos(9) }} className="botonc">9</button>
        <button type="button" className="botonc">gg</button>
        <button type="button" onClick={() => { ingresoDatos(4) }} className="botonc">4</button>
        <button type="button" onClick={() => { ingresoDatos(5) }} className="botonc">5</button>
        <button type="button" onClick={() => { ingresoDatos(6) }} className="botonc">6</button>
        <button type="button" onClick={() => { ingresoDatos('x') }} className="botonc">x</button>
        <button type="button" onClick={() => { ingresoDatos(1) }} className="botonc">1</button>
        <button type="button" onClick={() => { ingresoDatos(2) }} className="botonc">2</button>
        <button type="button" onClick={() => { ingresoDatos(3) }} className="botonc">3</button>
        <button type="button" onClick={() => { ingresoDatos('+') }} className="botonc">+</button>
        <button type="button" onClick={() => { ingresoDatos(0) }} className="botonc">0</button>
        <button type="button" onClick={() => { ingresoDatos('C') }} className="botonc">C</button>
        <button type="button" onClick={() => { ingresoDatos('=') }} className="botonc">=</button>
        <button type="button" onClick={() => { ingresoDatos('-') }} className="botonc">-</button>
        <button type="button" className="botonc">:3</button>
        <button type="button" onClick={() => { ingresoDatos('.') }} className="botonc">.</button>
        <button type="button" onClick={() => { ingresoDatos('%') }} className="botonc">%</button>
        <button type="button" onClick={() => { ingresoDatos('/') }} className="botonc">/</button>
      </div>
    </div>
  )
}

export default Calculadora
