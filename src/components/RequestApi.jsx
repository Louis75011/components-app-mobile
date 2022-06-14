import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

export default function RequestApi() {
  const [dataUsers, dataSetUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response.status === 200) {
          let data = await response.json();
          dataSetUsers(data);
          console.log("dataUser", { data });
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [dataSetUsers]);

  return (
    <div>
      <h2 className="text-center text-success m-5 fw-bold fs-4">
        Liste des utilisateurs via Typicode :
      </h2>

      {isError ? (
        <h3> Une erreur est survenue</h3>
      ) : (
        <ul className="m-3 fst-italic">
          {dataUsers.map((user) => (
            <li key={user.id}>
              N°ID {user.id} - {user.name}
            </li>
          ))}
        </ul>
      )}

      <Link className="d-flex" to={"/"}>
        <button className="btn-primary m-5">Retour</button>
      </Link>
    </div>
  );
}
