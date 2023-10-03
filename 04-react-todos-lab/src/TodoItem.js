import './TodoItem.css'
import { TodoStatus, toIsoDate } from "./todo-model";

const TodoItem = ({ todo, onCompleted, onCanceled }) =>
(<div className="TodoItem">
    <span className='TodoItem-left'>
        <span className='TodoItem-text'>
            <span className='TodoItem-id'>{todo.id}</span>
            {todo.text}
        </span>
        <span className='TodoItem-date'>
            {todo.deadline}
        </span>
    </span>
    <span className='TodoItem-right'>
        <span className='TodoItem-status'>{TodoStatus[todo.status]}</span>
        <span className='TodoItem-button fas fa-circle-check ok' onClick={() => onCompleted(todo)}></span>
        <span className='TodoItem-button fas fa-circle-xmark danger' onClick={() => onCanceled(todo)}></span>
    </span>
</div>)

export default TodoItem;