import React, { useState } from 'react'
import BackButton from './utils/BackButton'
import '../style/App.css'
import '../style/Components.css'

export default function Counter() {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter((count) => count + 1)
  }

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1)
    }
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div className="counter">
      <h2 className="text-success text-center m-5 fw-bold">
        Liste des tâches à accomplir :
      </h2>

      <span className="counter__output m-5">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Réinitialiser
        </button>
      </div>

      <BackButton />
    </div>
  )
}
