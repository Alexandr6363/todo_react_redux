import { useState } from 'react';

export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('');
    const [warning, setWarning] = useState('');

    return (
        <div>
            <div>
            {warning ? <div>{warning}</div> : ""}
            </div>
            <input
                placeholder="Add todo"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                    if (e.target.value.length > 0){
                        setWarning("")
                    }
                }}
            />
            <button
                onClick={() => {
                    setTitle('');
                    if (title.length > 0) {
                        addTodo(title);
                        setWarning("")
                    }
                    else {
                        setWarning("Empty task!")    
                    }
                }}
            >
                Add
            </button>
        </div>
    );
}