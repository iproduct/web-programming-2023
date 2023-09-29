import { Todo } from "./todo-model";

const MOCK_TODOS = [
    new Todo('Create TODO App using create-react-app'),
    new Todo('Create TodoApp function component'),
    new Todo('Create TodoList function component', new Date(2023, 10, 3)),
    new Todo('Create TodoItem function component', new Date(2023, 10, 4)),
    new Todo('Create TodoInput function component', new Date(2023, 10, 2)),
    new Todo('Connect todos app with json-server backend', new Date(2023, 10, 5)),
    new Todo('Create TodoFilter function component', new Date(2023, 10, 2)),
    new Todo('Improve styiling', new Date(2023, 10, 7)),
]

export default MOCK_TODOS;