import React from 'react'
import { Link } from 'react-router-dom'
import '../style/App.css'

export default function Home() {
  return (
    <div className="bg-dark text-white p-3 m-1">
      <h1 className="text-center m-5 fw-bold bg-info">
        Liste de modules et applications !
      </h1>

      <div className="m-4">
        <h2 className="m-2 fst-italic">- Liste de tâches à faire:</h2>
        <Link className="m-2 fw-bolder fs-4" to={`/todolist`}>
          To-Do List
        </Link>
      </div>

      <div className="m-4">
        <h2 className="m-2 fst-italic">- Pomodoro application:</h2>
        <Link className="m-2 fw-bolder fs-4" to={`/pomodoro`}>
          Pomodoro chronomètre
        </Link>
      </div>

      <div className="m-4">
        <h2 className="m-2 fst-italic">- Chronomètre:</h2>
        <Link className="m-2 fw-bolder fs-4" to={`/stopwatch`}>
          Stopwatch
        </Link>
      </div>

      <div className="m-4">
        <h2 className="m-2 fst-italic">- Compteur de cliques/actions:</h2>
        <Link className="m-2 fw-bolder fs-4" to={`/counter`}>
          Counter
        </Link>
      </div>

      <div className="m-4">
        <h2 className="m-2 fst-italic">- Requête API complète:</h2>
        <Link className="m-2 fw-bolder fs-4" to={`/requestapi`}>
          Request Api
        </Link>
      </div>
      <h4 className="text-center m-5 fw-bold bg-info">
        En vous souhaitant bonne découverte !
      </h4>
    </div>
  )
}
