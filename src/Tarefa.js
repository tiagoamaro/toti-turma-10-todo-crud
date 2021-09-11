import React from "react";
import { Link, useHistory } from "react-router-dom"; 

export default function Tarefa({ task }) {
    const history = useHistory()
    const { id, title, done } = task

    const deleteTask = () => {
        fetch(`http://localhost:3001/tasks/${id}`, { method: "DELETE" })

        // After deleting, let's refresh the page
        history.go(0)
    }


    return (
        <li>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Done: {done ? "Pronto!" : "Pendente"}</div>

            <button onClick={deleteTask}>Delete</button>
            <Link to={`/edit/${id}`}>Edit</Link>
        </li>
    )
}