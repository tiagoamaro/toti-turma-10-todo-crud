import React, { useState, useEffect } from "react";
import Tarefa from "./Tarefa";

export default function Lista() {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3001/tasks")
          .then(response => response.json())
          .then(tasks => setTasks(tasks))
    }, [])

    const taskList = tasks.map(task => {
        return <Tarefa key={task.id} task={task} />
    })

    return (
        <ul>
            {taskList}
        </ul>
    )
}