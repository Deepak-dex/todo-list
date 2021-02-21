import React from 'react'

function NotesDisplay({notes, noteEl, id, todo, settodo}) {

    var del = () => {
        settodo(todo.filter((el) => el.id !== noteEl.id));
        localStorage.setItem("todos",JSON.parse(todo))
    }

    return(
        <div className="notes-display">
            <span className="remove-btn" onClick={del}>+</span>
            <p className="note">{notes}</p>
        </div>
    )
}

export default NotesDisplay