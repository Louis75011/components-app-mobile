import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import ToDoList from './components/ToDoList.jsx'
import Pomodoro from './components/Pomodoro.jsx'
import Stopwatch from './components/Stopwatch'
import Counter from './components/Counter'
import TabsSystem from './components/TabsSystem'
import RequestApi from './components/RequestApi.jsx'
import ClassName from './components/ClassName.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './style/App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todolist" element={<ToDoList />}></Route>
        <Route path="/pomodoro" element={<Pomodoro />}></Route>
        <Route path="/stopwatch" element={<Stopwatch />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/tabssystem" element={<TabsSystem />}></Route>
        <Route path="/requestapi" element={<RequestApi />}></Route>
        <Route path="/classname" element={<ClassName />}></Route>
      </Routes>
    </>
  )
}
