import './TodoList.css';
import { toIsoDate } from "./todo-model";

const TodoList = ({ todos }) =>
(<ul className="TodoList-container">
    {todos.map(
        todo => (<li>{todo.id}: {todo.text} - {toIsoDate(todo.deadline)}</li>)
    )}
</ul>)


export default TodoList;