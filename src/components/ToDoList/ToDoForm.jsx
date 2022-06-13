import React, { useState } from "react";

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
    <div className="text-center m3">
      <form onSubmit={handleSubmit} className="form m5">
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Entrez une tâche"
        />
        <button className="m3">Envoyer</button>
      </form>
    </div>
  );
};

export default ToDoForm;
