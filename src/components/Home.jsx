import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="bg-dark text-white p-4 m-1">
      <h1 className="text-center m-5 fw-bold bg-info">
        Liste de mes modules et applications !
      </h1>

      <div className="m-5">
        <h2 className="m-4 fst-italic">- Liste de tâches à faire:</h2>
        <Link className="m-4 fw-bolder fs-4" to={`/todolist`}>
          To-Do List
        </Link>
      </div>

      <div className="m-5">
        <h2 className="m-4 fst-italic">- Chronomètre:</h2>
        <Link className="m-4 fw-bolder fs-4" to={`/stopwatch`}>
          Stopwatch
        </Link>
      </div>

      <div className="m-5">
        <h2 className="m-4 fst-italic">- Compteur de cliques/actions:</h2>
        <Link className="m-4 fw-bolder fs-4" to={`/counter`}>
          Counter
        </Link>
      </div>

      <div className="m-5">
        <h2 className="m-4 fst-italic">- Requête API complète:</h2>
        <Link className="m-4 fw-bolder fs-4" to={`/requestapi`}>
          Request Api
        </Link>
      </div>
    </div>
  );
}
