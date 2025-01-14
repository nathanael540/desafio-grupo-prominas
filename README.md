# Desafio Grupo Prominas - Desenvolvedor Web

Este repositório é uma proposta de resolução ao desafio proposto durante o processo seletivo do Grupo Prominas - Desenvolvedor Web realizado em Janeiro de 2025.

# Descrição do Desafio

_⁠Uma aplicação simples de gerenciamento de tarefas._

Principais funcionalidades:

- Criar tarefas.
- Listar todas as tarefas.
- Editar tarefas existentes.
- Excluir tarefas.

# ⁠Estrutura do Desafio

## Frontend (Angular)

_Função: Interface do usuário para criar, visualizar, editar e excluir tarefas._

- Principais Componentes:
- - Task List Component: Exibe a lista de tarefas.
- - Task Form Component: Formulário para criar ou editar tarefas.

## Backend (Node.js com Express.js)

_Função: Fornecer APIs RESTful para operações CRUD._

- Endpoints:
- - `GET /tasks`: Retorna todas as tarefas.
- - `POST /tasks`: Cria uma nova tarefa.
- - `PUT /tasks/:id`: Atualiza uma tarefa existente.
- - `DELETE /tasks/:id`: Exclui uma tarefa.

# Banco de Dados (MongoDB)

Coleção: tasks

Estrutura do Documento:

```json
{
  "_id": "ObjectId",
  "title": "String",
  "description": "String",
  "completed": "Boolean",
  "isActive": "Boolean"
}
```
