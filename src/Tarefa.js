import React from "react";

export default class Tarefa extends React.Component {
    constructor(props) {
        super(props)

        this.delete = this.delete.bind(this);
    }

    delete() {
        const { id } = this.props.task;
        const url = `http://localhost:3001/tasks/${id}`;

        fetch(url, {
            method: "DELETE"
        })

        this.props.fetchTasksCallback();
    }

    render() {
        // this.props.task
        // task => { id, title, done }

        const { id, title, done } = this.props.task;

        return (
            <li>
                <div>ID: {id}</div>
                <div>Title: {title}</div>
                <div>Done: {done ? "Pronto!" : "Pendente"}</div>

                <button onClick={this.delete}>Delete</button>
            </li>
        )
    }
}