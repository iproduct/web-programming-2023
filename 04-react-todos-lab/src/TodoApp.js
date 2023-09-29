import './App.css';
import { useState } from "react";
import MOCK_TODOS from './mock-todos';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

function TodoApp() {
    const [todos, setTodos] = useState(MOCK_TODOS)
    function addTodo(todo) {
        setTodos(state => [...state, todo])
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2>React TODOs</h2>
                <TodoInput onCreateTodo={addTodo} />
                <TodoList todos={todos} />
            </header>
        </div>
    );
}

export default TodoApp;