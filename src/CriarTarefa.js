import React from "react";

export default class CriarTarefa extends React.Component {
    constructor() {
        super()

        this.state = {
            title: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.save = this.save.bind(this)
    }

    handleChange(event) {
        this.setState({ title: event.target.value })
    }

    save() {
        const newTask = {
            title: this.state.title,
            done: false,
        }

        fetch("http://localhost:3001/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask)
        })

        this.setState({ title: "" })
        this.props.createTaskCallback()
    }

    render() {
        return (
            <div>
                <label>
                    Criar tarefa
                    <input type="text" value={this.state.title} onChange={this.handleChange}></input>
                </label>
                <button onClick={this.save}>Criar</button>
            </div>
        )
    }
}