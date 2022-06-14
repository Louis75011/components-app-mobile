import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../services/dataToDo.json";
import "../style/App.css";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState(data);

  // Boucle sur les données de tâches
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  // Distingue tâches accomplies et en cours
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  // Possibilité d'ajout des tâches
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  // Les rendus
  const HeaderTitle = () => {
    return (
      <header className="text-center m-5 fw-bold">
        <h2 className="text-success">Liste des tâches à accomplir :</h2>
      </header>
    );
  };

  // Permet le clique sur les tâches
  const ToDo = ({ todo, handleToggle }) => {
    const handleClick = (e) => {
      e.preventDefault();
      handleToggle(e.currentTarget.id);
    };

    return (
      <div
        id={todo.id}
        key={todo.id + todo.task}
        name="todo"
        value={todo.id}
        onClick={handleClick}
        className={todo.complete ? "todo strike" : "todo"}
      >
        {todo.task}
      </div>
    );
  };

  const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
      <div className="text-center">
        {toDoList.map((todo, index) => {
          return (
            <ToDo
              key={index}
              todo={todo}
              handleToggle={handleToggle}
              handleFilter={handleFilter}
            />
          );
        })}
        <button
          style={{ margin: "20px" }}
          className="btn btn-danger"
          onClick={handleFilter}
        >
          Effacer les tâches accomplies
        </button>
      </div>
    );
  };

  // Fonction d'ajout des tâches personnalisées
  const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
      setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      addTask(userInput);
      setUserInput("");
    };
    return (
      <div className="d-flex justify-content-around gap-2">
        <form onSubmit={handleSubmit} className="form m2">
          <input
            value={userInput}
            type="text"
            onChange={handleChange}
            placeholder="Ajoutez une tâche"
          />
          <button style={{ margin: "10px" }} className="btn btn-primary m2">
            Envoyer
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <HeaderTitle />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />

      <Link className="d-flex" to={"/"}>
        <button className="btn-primary m-5">Retour</button>
      </Link>
    </div>
  );
}
