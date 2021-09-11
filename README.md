# Toti - Turma 10 TODO CRUD

## Dependências do sistema

O projeto exige que você tenha NodeJS 12+ instalado no seu sistema, onde o comando `npm` funcione (exposto no seu `PATH`).

## Passo a passo

- Clone o projeto (`git clone git@github.com:tiagoamaro/toti-turma-10-todo-crud.git`)
- Instale suas dependências (`npm install`)
- Abra seu terminal e rode o servidor front-end (`npm run start`)
    - Esse servidor executará os scripts para distribuir uma aplicação React, exeutando os scripts contidos no `react-scripts start`
- Em uma outra instância de terminal, rode o servidor back-end (`npm run fake-api`)
    - Esse servidor utiliza a biblioteca [`json-server`](https://github.com/typicode/json-server), que executará uma simulação de uma API REST, que implementa o recurso `/tasks`