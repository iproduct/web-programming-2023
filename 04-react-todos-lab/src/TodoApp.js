import './App.css';
import { useState } from "react";
import MOCK_TODOS from './mock-todos';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import { Completed } from './todo-model';

function TodoApp() {
    const [todos, setTodos] = useState(MOCK_TODOS)
    function addTodo(todo) {
        setTodos(state => [...state, todo])
    }
    function completeTodo(todo) {
        setTodos(tds => tds.map(td => td.id === todo.id ? ({...td, status: Completed}): td))
    }
    function cancelTodo(todo) {
        setTodos(tds => tds.filter(td => td.id !== todo.id))
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2>React TODOs</h2>
                <TodoInput onCreateTodo={addTodo} />
                <TodoList todos={todos} onCompleted={completeTodo} onCanceled={cancelTodo} />
            </header>
        </div>
    );
}

export default TodoApp;