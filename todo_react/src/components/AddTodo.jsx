import { useState } from 'react';

export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('');
    return (
        <>
            <input
                placeholder="Add todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    setTitle('');
                    addTodo(title);
                }}
            >
                Add
            </button>
        </>
    );
}