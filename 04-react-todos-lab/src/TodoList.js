import { toIsoDate } from "./todo-model";

const TodoList = ({ todos }) =>
(<ul>
    {todos.map(
        todo => (<li>{todo.id}: {todo.text} - {toIsoDate(todo.deadline)}</li>)
    )}
</ul>)


export default TodoList;