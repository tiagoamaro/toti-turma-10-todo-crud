import './App.css';

import React from "react";
import Lista from "./Lista"
import CriarTarefa from './CriarTarefa';

// Lista de tarefas
// -> Listar tarefa por tarefa
// -> tarefa

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }

    this.fetchTasks = this.fetchTasks.bind(this);
  }

  fetchTasks() {
    fetch("http://localhost:3001/tasks")
      .then(response => response.json())
      .then(tasks => this.setState({ tasks: tasks }))
  }

  componentDidMount() {
    this.fetchTasks()
  }

  render() {
    return (
      <div className="App">
        <CriarTarefa createTaskCallback={this.fetchTasks} />

        <Lista tasks={this.state.tasks} fetchTasksCallback={this.fetchTasks} />
      </div>
    );
  }
}
