import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CriarTarefa() {
    const history = useHistory()
    const [title, setTitle] = useState("")

    const save = () => {
        fetch("http://localhost:3001/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, done: false })
        })

        // After saving, go back to the home page
        history.push("/")
    }

    return (
        <div>
            <label>
                Criar tarefa
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
            </label>
            <button onClick={save}>Criar</button>
        </div>
    )
}