/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './components/Calculadora.jsx'
import './styles/Master.css'

const App = () => (
  <div className="screen_calc">
    <Calculadora />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
