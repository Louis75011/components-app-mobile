import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-center m-5 fw-bold">
        Mes applications en composants
      </h1>
      <h2 className="m-3 fst-italic">- Liste de choses à faire :</h2>
      <Link className="m-4 fw-bolder fs-5" to={`/ToDoList`}>
        To-Do List
      </Link>
      <h2 className="m-3 fst-italic">- Exemple de requête api</h2>
      <Link className="m-4 fw-bolder fs-5" to={`/RequestApi`}>
        Request Api
      </Link>
    </div>
  );
}
