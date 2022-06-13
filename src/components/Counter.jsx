import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
      <span className="counter__output m-5">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Réinitialiser
        </button>
      </div>

      <Link className="d-flex" to={"/"}>
        <button className="btn-primary m-5">Retour</button>
      </Link>
    </div>
  );
}
