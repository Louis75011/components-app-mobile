import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./ToDoList/Header";
import ToDoList from "./ToDoList/ToDoList.jsx";
import ToDoForm from './ToDoList/ToDoForm.jsx';
import data from "../data.json";
import '../App.css'

export default function ToDoListContainer() {
  const [ toDoList, setToDoList ] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
          return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
      }
    
      const handleFilter = () => {
        let filtered = toDoList.filter(task => {
          return !task.complete;
        });
        setToDoList(filtered);
      }
    
      const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
      }

  return (
    <div>
        <Header />
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        <ToDoForm addTask={addTask}/>

      <Link className="d-flex" to={"/"}>
        <button className="btn btn-primary">
          Retour
        </button>
      </Link>
    </div>
  );
}