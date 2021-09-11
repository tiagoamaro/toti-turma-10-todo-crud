import React from "react";

export default class EditarTarefa extends React.Component {
    constructor(props) {
        super(props)

        const { title, done } = props.task

        this.state = {
            title: title,
            done: done
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.update = this.update.bind(this);
    }

    updateTitle(event) {
        this.setState({ title: event.target.value })
    }

    updateDone(event) {
        this.setState({ done: event.target.checked })
    }

    update() {
        const { id } = this.props.task
        const { title, done } = this.state

        const url = `http://localhost:3001/tasks/${id}`;

        const updatedTask = {
            title: title,
            done: done
        }

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        })

        this.props.fetchTasksCallback()
        this.props.switchEdit()
    }

    render() {
        return (
            <div>
                <label>
                    Novo titulo:
                    <input type="text" value={this.state.title} onChange={this.updateTitle} />
                </label>

                <label>
                    Pronto
                    <input type="checkbox" checked={this.state.done} onChange={this.updateDone} />
                </label>

                <button onClick={this.update}>Salvar</button>
            </div>
        )
    }
}