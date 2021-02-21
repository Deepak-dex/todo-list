import React, { useState, useEffect } from 'react'
import './App.css';
import NotesTaker from './component/noteTaker'
import NotesDisplay from './component/notesDisplay'

function App() {
  const [itemVal, setitemVal] = useState("")
  if(!localStorage.getItem("todos")){

    localStorage.setItem("todos","[]")
  }
  
  var todoList = JSON.parse(localStorage.getItem("todos"))

  const [todo,settodo] = useState(todoList)


  return (
    <div className="App">
      <h1>ToDo List</h1>

      <NotesTaker setitemVal={setitemVal} itemVal={itemVal} settodo={settodo} todo={todo} />

      <div className="notes-container">
      { todo.map( note =>(
        <NotesDisplay key={note.id} notes={note.text} id={note.id} noteEl={note} todo={todo} settodo={settodo} />
        ))}
      
      </div>
    </div>
  );
}

export default App;
