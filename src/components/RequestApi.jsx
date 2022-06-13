import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RequestApi() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response.status === 200) {
          let data = await response.json();
          setUsers(data);
          console.log("dataUser", { data });
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [setUsers]);

  return (
    <div>
      <h2 className="text-center m-5 fw-bold fs-4">
        Liste des utilisateurs de JSONplaceHolder/Typicode :
      </h2>
      {isError ? (
        <h3> Une erreur est survenue</h3>
      ) : (
        <ul className="m-3 fst-italic">
          {users.map((user) => (
            <li key={user.id}>
              N°ID {user.id} - {user.name}
            </li>
          ))}
        </ul>
      )}
      <Link className="d-flex" to={"/"}>
        <button className="btn btn-primary m-5">Retour</button>
      </Link>
    </div>
  );
}
