import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"; 

export default function EditarTarefa() {
    const history = useHistory()
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [done, setDone] = useState(false)
    const url = `http://localhost:3001/tasks/${id}`;

    // After component is mounted, let's load data from the API, as we have the ID from the URL
    useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(task => {
              setTitle(task.title)
              setDone(task.done)
          })
    }, [url])


    const update = () => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, done })
        })

        // After updating, let's go back to the home page
        history.push("/")
    }


    return (
        <div>
            <label>
                Novo titulo:
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </label>

            <label>
                Pronto
                <input type="checkbox" checked={done} onChange={(event) => setDone(event.target.checked)} />
            </label>

            <button onClick={update}>Salvar</button>
        </div>
    )
}