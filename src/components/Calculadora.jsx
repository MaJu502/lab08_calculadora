/* eslint-disable no-alert */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/Calculadora.css'

const Calculadora = () => {
  const [dato1, letDato1] = React.useState('')
  const [dato2, letDato2] = React.useState('')
  const [operador, letOperador] = React.useState('0')
  const [resultado, letResultado] = React.useState('0')
  const [pantalla, letPantalla] = React.useState('_')

  const mostrarResultado = () => {
    const tempOperador = operador
    if (tempOperador === '+') {
      let tempFinal = parseFloat(dato1) + parseFloat(dato2)
      if (tempFinal >= 999999999) {
        letPantalla('ERROR')
      } else if (tempFinal < 0) {
        letPantalla('ERROR')
      } else {
        tempFinal = tempFinal.toString().substring(0, 9)
        letPantalla(tempFinal)
      }
      letDato1('')
      letDato2('')
      letOperador('0')
    } else if (tempOperador === '-') {
      let tempFinal = parseFloat(dato1) - parseFloat(dato2)
      if (tempFinal >= 999999999) {
        letPantalla('ERROR')
      } else if (tempFinal < 0) {
        letPantalla('ERROR')
      } else {
        tempFinal = tempFinal.toString().substring(0, 9)
        letPantalla(tempFinal)
      }
      letDato1('')
      letDato2('')
      letOperador('0')
    } else if (tempOperador === 'x') {
      let tempFinal = parseFloat(dato1) * parseFloat(dato2)
      if (tempFinal >= 999999999) {
        letPantalla('ERROR')
      } else if (tempFinal < 0) {
        letPantalla('ERROR')
      } else {
        tempFinal = tempFinal.toString().substring(0, 9)
        letPantalla(tempFinal)
      }
      letDato1('')
      letDato2('')
      letOperador('0')
    } else if (tempOperador === '/') {
      let tempFinal = parseFloat(dato1) / parseFloat(dato2)
      if (tempFinal >= 999999999) {
        letPantalla('ERROR')
      } else if (tempFinal < 0) {
        letPantalla('ERROR')
      } else {
        tempFinal = tempFinal.toString().substring(0, 9)
        letPantalla(tempFinal)
      }
      letDato1('')
      letDato2('')
      letOperador('0')
    } else if (tempOperador === '%') {
      let tempFinal = parseFloat(dato1) % parseFloat(dato2)
      if (tempFinal >= 999999999) {
        letPantalla('ERROR')
      } else if (tempFinal < 0) {
        letPantalla('ERROR')
      } else {
        tempFinal = tempFinal.toString().substring(0, 9)
        letPantalla(tempFinal)
      }
      letDato1('')
      letDato2('')
      letOperador('0')
    }
  }

  const ingresoDatos = (dato) => {
    if (operador === '0') {
      if (dato === 1) {
        let temp = dato1
        temp += '1'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === 2) {
        let temp = dato1
        temp += '2'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === 3) {
        let temp = dato1
        temp += '3'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === 4) {
        let temp = dato1
        temp += '4'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === 5) {
        let temp = dato1
        temp += '5'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === 6) {
        let temp = dato1
        temp += '6'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === 7) {
        let temp = dato1
        temp += '7'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === 8) {
        let temp = dato1
        temp += '8'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === 9) {
        let temp = dato1
        temp += '9'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === 0) {
        let temp = dato1
        temp += '0'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === '.') {
        let temp = dato1
        temp += '.'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato1(temp)
      } else if (dato === '+') {
        letOperador('+')
        letPantalla('+')
      } else if (dato === '-') {
        letOperador('-')
        letPantalla('-')
      } else if (dato === 'x') {
        letOperador('x')
        letPantalla('x')
      } else if (dato === '/') {
        letOperador('/')
        letPantalla('/')
      } else if (dato === '%') {
        letOperador('%')
        letPantalla('%')
      } else if (dato === '=') {
        mostrarResultado()
        letDato1('')
        letDato2('')
      } else if (dato === 'C') {
        letDato1('')
        letDato2('')
        letResultado('0')
        letOperador('0')
        letPantalla('_')
        alert('reseteado')
      }
    } else if (operador !== '0') {
      if (dato === 1) {
        let temp = dato2
        temp += '1'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === 2) {
        let temp = dato2
        temp += '2'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === 3) {
        let temp = dato2
        temp += '3'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === 4) {
        let temp = dato2
        temp += '4'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === 5) {
        let temp = dato2
        temp += '5'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === 6) {
        let temp = dato2
        temp += '6'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === 7) {
        let temp = dato2
        temp += '7'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === 8) {
        let temp = dato2
        temp += '8'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === 9) {
        let temp = dato2
        temp += '9'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === 0) {
        let temp = dato2
        temp += '0'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === '.') {
        let temp = dato2
        temp += '.'
        const temppantalla = temp.toString().substring(0, 9)
        letPantalla(temppantalla)
        letDato2(temp)
      } else if (dato === '+') {
        letOperador('+')
        letPantalla('+')
      } else if (dato === '-') {
        letOperador('-')
        letPantalla('-')
      } else if (dato === 'x') {
        letOperador('x')
        letPantalla('x')
      } else if (dato === '/') {
        letOperador('/')
        letPantalla('/')
      } else if (dato === '%') {
        letOperador('%')
        letPantalla('%')
      } else if (dato === '=') {
        mostrarResultado()
        letDato1('')
        letDato2('')
      } else if (dato === 'C') {
        letDato1('')
        letDato2('')
        letOperador('0')
        letResultado('0')
        letPantalla('_')
        alert('reseteado')
      }
    }
  }

  return (
    <div className="cuadro_calc">
      <div className="pantalla">
        <a className="contenido_pantalla">{pantalla}</a>
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
