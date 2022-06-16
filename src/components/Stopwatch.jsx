import React, { useState, useEffect } from 'react'
import BackButton from './utils/BackButton'
import '../style/Components.css'

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])

  return (
    <div className="stopwatch">
      <h2 className="text-success">Compteur de temps or :</h2>

      <div className="circle gold">
        <div className="time">
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="controls">
          <button className="btn btn-primary" onClick={() => setRunning(true)}>
            Start
          </button>
          <button className="btn btn-warning" onClick={() => setRunning(false)}>
            Stop
          </button>
          <button className="btn btn-danger" onClick={() => setTime(0)}>
            Reset
          </button>
        </div>
      </div>

      <BackButton />
    </div>
  )
}

export default Stopwatch
