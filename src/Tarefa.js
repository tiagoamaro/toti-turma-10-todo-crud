import React from "react";
import EditarTarefa from "./EditarTarefa";

export default class Tarefa extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false
        }

        this.delete = this.delete.bind(this);
        this.switchEdit = this.switchEdit.bind(this);
    }

    delete() {
        const { id } = this.props.task;
        const url = `http://localhost:3001/tasks/${id}`;

        fetch(url, {
            method: "DELETE"
        })

        this.props.fetchTasksCallback();
    }

    switchEdit() {
        this.setState({ editing: !this.state.editing })
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
                <button onClick={this.switchEdit}>Edit</button>

                {
                    this.state.editing ?
                        <EditarTarefa 
                            task={this.props.task}
                            fetchTasksCallback={this.props.fetchTasksCallback}
                            switchEdit={this.switchEdit}
                        /> :
                        null
                }
            </li>
        )
    }
}