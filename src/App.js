import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import RequestApi from "./components/RequestApi.jsx";
import ToDoList from "./components/ToDoList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todolist" element={<ToDoList />}></Route>
        <Route path="/requestapi" element={<RequestApi />}></Route>
      </Routes>
    </>
  );
}
