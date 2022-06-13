import React from "react";
import { Link } from "react-router-dom";

export default function ToDoList() {
  return (
    <div>
      <Link className="d-flex" to={"/"}>
        <button className="btn btn-primary justify-content-center">
          Retour
        </button>
      </Link>
    </div>
  );
}
