import React, { useEffect, useState } from 'react'

function NotesTaker({setitemVal, itemVal, settodo, todo}){

    var itemValue = (e) => {
        setitemVal(e.target.value)
    }

    var addItem = () => {
        settodo((e) =>{
            return[...e, {text:itemVal,id: Math.random()*1000}]
        })
        setitemVal("")
    }

    useEffect(() =>{
        console.log(todo)
        saveTodo()
    },[todo])

    var saveTodo = () =>{
        var str = JSON.stringify(todo)
        localStorage.setItem("todos",str)
    }

    return(
        <div className="note-taker" >
        <input placeholder="Add a item" type="text" onChange={itemValue} value={itemVal}/>
        <span className="add-btn" onClick={addItem}> + </span>
        </div>
    )

}

export default NotesTaker