import './TodoInput.css'
import { useState } from "react"
import { Active, Canceled, Completed, Todo, TodoStatus} from "./todo-model"

const TodoInput = ({ onCreateTodo, onError }) => {
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');
    const [status, setStatus] = useState(Active);

    function submitTodo(event) {
        event.preventDefault();
        if (text.length === 0 || deadline.length === 0) {
            onError(`All field are required`)
            return;
        }
        const created = new Todo(text, deadline, status);
        onCreateTodo(created);
        reset();
    }

    function reset(event) {
        setText('');
        setDeadline('');
        setStatus(Active);
        onError(undefined);
    }

    return (
        <form className='TodoInput-form' onSubmit={submitTodo} onReset={reset}>
            <input type="text" placeholder="What to do?" value={text} onChange={(event) => { setText(event.target.value) }} />
            <input type="date" placeholder="Todo deadline" value={deadline} onChange={(event) => { setDeadline(event.target.value) }} />
            <select placeholder="Todo status" value={status} onChange={(event) => { setStatus(event.target.value) }}>
                <option value={Active}>{TodoStatus[Active]}</option>
                <option value={Completed}>{TodoStatus[Completed]}</option>
                <option value={Canceled}>{TodoStatus[Canceled]}</option>
            </select>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default TodoInput;