import React from "react";
import Tarefa from "./Tarefa";

export default function Lista(props) {
    const taskList = props.tasks.map(task => {
        return <Tarefa key={task.id} task={task} fetchTasksCallback={props.fetchTasksCallback} />
    })

    return (
        <ul>
            {taskList}
        </ul>
    )
}