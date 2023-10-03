import './App.css';
import { useEffect, useState } from "react";
import MOCK_TODOS from './mock-todos';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { Completed } from './todo-model';
import API_CLIENT from './api-client';

function TodoApp() {
    const [todos, setTodos] = useState(MOCK_TODOS);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        API_CLIENT.findAll()
            .then(tds => setTodos(tds))
            .catch(err => setError(err));
    }, []);

    async function addTodo(todo) {
        try {
            const created = await API_CLIENT.create(todo)
            setTodos(state => [...state, created])
        } catch (err) {
            setError(err);
        }
    }
    function completeTodo(todo) {
        setTodos(tds => tds.map(td => td.id === todo.id ? ({ ...td, status: Completed }) : td))
    }
    function cancelTodo(todo) {
        setTodos(tds => tds.filter(td => td.id !== todo.id))
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2>React TODOs</h2>
                {error && (<div className="error">{error}</div>)}
                <TodoInput onCreateTodo={addTodo} onError={(err) => setError(err)} />
                <TodoList todos={todos} onCompleted={completeTodo} onCanceled={cancelTodo} />
            </header>
        </div>
    );
}

export default TodoApp;