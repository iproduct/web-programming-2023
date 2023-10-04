import './App.css';
import { useEffect, useState } from "react";
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { Completed } from './todo-model';
import API_CLIENT from './api-client';

function TodoApp() {
    const [todos, setTodos] = useState([]);
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
    async function completeTodo(todo) {
        try {
            const index = todos.findIndex(td => td.id === todo.id);
            if(index < 0) {
                // eslint-disable-next-line no-throw-literal
                throw `Todo with ID="${todo.id}" not found`;
            }
            const modified = { ...todos[index], status: Completed }
            await API_CLIENT.update(modified);
            setTodos(tds => tds.map(td => td.id === todo.id ? modified : td));
        } catch (err) {
            setError(err);
        }

        setTodos(tds => tds.map(td => td.id === todo.id ? ({ ...td, status: Completed }) : td))
    }
    async function cancelTodo(todo) {
        try {
            await API_CLIENT.deleteById(todo.id)
            setTodos(tds => tds.filter(td => td.id !== todo.id))
        } catch (err) {
            setError(err);
        }
        
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