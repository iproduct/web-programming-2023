import './App.css';
import { useState } from "react";
import MOCK_TODOS from './mock-todos';
import TodoList from './TodoList';

function TodoApp() {
    const [todos, setTodos] = useState(MOCK_TODOS)
    return (
        <div className="App">
            <header className="App-header">
                <h2>React TODOs</h2>
                <TodoList todos={todos} />
            </header>
        </div>
    );
}

export default TodoApp;