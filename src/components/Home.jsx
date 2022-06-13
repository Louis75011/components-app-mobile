import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="bg-dark text-white p-4 m-1">
      <h1 className="text-center m-5 fw-bold bg-info">
        Mes applications :
      </h1>
      <h2 className="m-3 fst-italic">- Liste de tâches à faire:</h2>
      <Link className="m-4 fw-bolder fs-5" to={`/ToDoList`}>
        To-Do List
      </Link>
      <h2 className="m-3 fst-italic">- Exemple de requête api complète:</h2>
      <Link className="m-4 fw-bolder fs-5" to={`/RequestApi`}>
        Request Api
      </Link>
    </div>
  );
}
