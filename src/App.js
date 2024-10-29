import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import ToDoApp from './components/todoapp/ToDoApp'
import "../src/App.css"

const App = () => {
  return (
    <div>
      <ToDoApp/>
    </div>
  )
}

export default App
