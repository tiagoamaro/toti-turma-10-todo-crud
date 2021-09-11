import React from "react";
import Tarefa from "./Tarefa";

export default class Lista extends React.Component {
    constructor() {
        super()

        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/tasks")
        .then(response => response.json())
        .then(tasks => this.setState({ tasks: tasks }))
    }

    render() {
        const taskList = this.state.tasks.map(task => {
            return <Tarefa key={task.id} task={task} />
        })

        return (
            <ul>
                {taskList}
            </ul>
        )
    }
}