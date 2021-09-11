import React from "react";

export default class Tarefa extends React.Component {
    constructor(props) {
        super(props)
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
            </li>
        )
    }
}