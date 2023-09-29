import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos }) =>
(<div className="TodoList-container">
    {todos.map(
        todo => (<TodoItem key={todo.id} todo={todo} />)
    )}
</div>)


export default TodoList;