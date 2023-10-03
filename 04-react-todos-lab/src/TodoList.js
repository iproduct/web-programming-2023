import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, ...rest }) =>
(<div className="TodoList-container">
    {todos.map(
        todo => (<TodoItem key={todo.id} todo={todo} {...rest} />)
    )}
</div>)


export default TodoList;