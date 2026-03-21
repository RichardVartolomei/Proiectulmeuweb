import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    function handleAdd() {
        if (input.trim() === '') return;
        setTodos([...todos, input]);
        setInput('');
    }

    return (
        <div>
            <h3>Todo List</h3>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Adaugă un task..."
            />
            <button onClick={handleAdd}>Adaugă</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;