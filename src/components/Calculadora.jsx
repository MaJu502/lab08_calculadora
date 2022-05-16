/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'
import '../styles/Calculadora.css'
import { evaluate } from 'mathjs'

const Calculadora = () => (
  <div className="cuadro_calc">
    <div className="pantalla">
      <a className="contenido_pantalla">hola</a>
    </div>
    <div className="grid_numeros">
      <button type="button" className="botonc">7</button>
      <button type="button" className="botonc">8</button>
      <button type="button" className="botonc">9</button>
      <button type="button" className="botonc">+/-</button>
      <button type="button" className="botonc">4</button>
      <button type="button" className="botonc">5</button>
      <button type="button" className="botonc">6</button>
      <button type="button" className="botonc">x</button>
      <button type="button" className="botonc">1</button>
      <button type="button" className="botonc">2</button>
      <button type="button" className="botonc">3</button>
      <button type="button" className="botonc">+</button>
      <button type="button" className="botonc">0</button>
      <button type="button" className="botonc" />
      <button type="button" className="botonc">=</button>
      <button type="button" className="botonc">-</button>
    </div>
  </div>
  )

export default Calculadora
