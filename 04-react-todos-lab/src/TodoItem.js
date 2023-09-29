import './TodoItem.css'
import { TodoStatus, toIsoDate } from "./todo-model";

const TodoItem = ({ todo }) =>
(<div className="TodoItem">
    <span className='TodoItem-left'>
        <span className='TodoItem-text'>
            <span className='TodoItem-id'>{todo.id}</span>
            {todo.text}
        </span>
        <span className='TodoItem-date'>
            {toIsoDate(todo.deadline)}
        </span>
    </span>
    <span className='TodoItem-right'>
        <span className='TodoItem-status'>{TodoStatus[todo.status]}</span>
    </span>
</div>)

export default TodoItem;