import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    function handleAdd() {
        if (input.trim() === '') return;
        setTodos([...todos, input]);
        setInput('');
    }
    function handleDelete(index){
        setTodos(todos.filter(function(_,i){
            return i!==index;
        }));
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

            <ol>
                {todos.map((todo, index) => (
                    <li key={index}>
                    {todo}
                    <button onClick={()=>handleDelete(index)}> Sterge</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoList;