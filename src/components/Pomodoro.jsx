import React, { useEffect, useState } from 'react'
import BackButton from './utils/BackButton'

export default function Pomodoro() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60)
  const [timer, setTimer] = useState()

  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1)
      if (secondsLeft === 0) {
        clearInterval(timer)
      }
    }, 1000)
    setTimer(timer)
  }

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer)
    }
  }, [secondsLeft, timer])

  useEffect(() => {
    return () => clearInterval(timer)
  }, [timer])

  return (
    <div className="container">
      <h2>Temps de travail et de repos:</h2>
      <button className="btn-warning p-1 m-3 rounded" onClick={start}>
        Lecture/Arrêt
      </button>
      <div className=" message pomodoro">{secondsLeft} Secondes restantes</div>

      <BackButton />
    </div>
  )
}
