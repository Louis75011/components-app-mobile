import React from 'react'
import HomeItem from './HomeItem'
import '../../style/App.css'

export default function Home() {
  return (
    <div className="container">
      <div className="bg-dark text-white m-1">
        <h1 className="text-center m-5 fw-bold bg-info">Liste de modules et applications !</h1>

        <HomeItem title="Liste de tâches à faire" link="todolist" text="ToDoList" />
        <HomeItem title="Pomodoro application" link="pomodoro" text="Chronomètre de travail" />
        <HomeItem title="Chronomètre" link="stopwatch" text="Stopwatch" />
        <HomeItem title="Compteur d'actions" link="counter" text="Counter of clicks" />
        <HomeItem title="Système d'onglets" link="tabssystem" text="Gestion des onglets" />
        <HomeItem title="Requête API complète" link="requestapi" text="Request API" />
        <HomeItem title="Gestion de classes" link="classname" text="Gestions de ClassName" />

        <h4 className="text-center m-5 fw-bold bg-info">En vous souhaitant bonne découverte !</h4>
      </div>
    </div>
  )
}
