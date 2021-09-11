import './App.css';

import React, { useEffect, useState } from "react";
import Lista from "./Lista"
import CriarTarefa from './CriarTarefa';
import EditarTarefa from './EditarTarefa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then(response => response.json())
      .then(tasks => setTasks(tasks))
  }, [])

  return (
    <Router>
      <nav>
        <Link to="/">Listar</Link>
        <br />
        <Link to="/create">Criar</Link>
        <br />
        <Link to="/sobre">Sobre rotas</Link>
      </nav>

      <Switch>
        <Route path="/create">
          <CriarTarefa />
        </Route>
        <Route path="/edit/:id">
          <EditarTarefa />
        </Route>
        <Route path="/sobre">
          Essa branch mostra como nós podemos usar rotas, hooks e componentes funcionais para escrever uma versão mais
          moderna e prática de componentes React, sem precisar passar funções de callback e ter uma maior preocupação com
          gerenciamento de estados!

          Boa sorte galera! =D

          Vocês podem ver mais sobre rotas e hooks nas aulas gravadas, e na documentação do React:

          <ul>
            <li>Rotas: <a href="https://reactrouter.com/web">https://reactrouter.com/web</a></li>
            <li>Hooks: <a href="https://reactjs.org/docs/hooks-intro.html">https://reactjs.org/docs/hooks-intro.html</a></li>
          </ul>
        </Route>
        <Route path="/">
          <Lista tasks={tasks} />
        </Route>
      </Switch>
    </Router>
  );
}
