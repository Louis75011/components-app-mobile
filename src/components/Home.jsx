import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="bg-dark text-white p-4 m-1">
      <h1 className="text-center m-5 fw-bold bg-info">
        Ma liste des applications !
      </h1>
      <div className="m-5">
        <h2 className="m-3 fst-italic">- Liste de tâches à faire:</h2>
        <Link className="m-4 fw-bolder fs-5" to={`/todolist`}>
          To-Do List
        </Link>
      </div>
      <div className="m-5">
        <h2 className="m-3 fst-italic">- Compteur d'actions:</h2>
        <Link className="m-4 fw-bolder fs-5" to={`/counter`}>
          Compteur de cliques
        </Link>
      </div>
      <div className="m-5">
        <h2 className="m-3 fst-italic">- Exemple de requête api complète:</h2>
        <Link className="m-4 fw-bolder fs-5" to={`/requestapi`}>
          Request Api
        </Link>
      </div>
    </div>
  );
}
