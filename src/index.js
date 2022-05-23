/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './components/Calculadora.jsx'
import './styles/Master.css'

const App = () => (
  <div>
    <header className="titulo">
      <h1 className="texto_titulo"> Bienvenido a Calculadora! </h1>
    </header>
    <div className="screen_calc">
      <Calculadora />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
