import './App.css';
import { useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState([])
    return (
        <div className="App">
            <header className="App-header">
                <h2>React TODOs</h2>
            </header>
        </div>
    );
}

export default TodoApp;