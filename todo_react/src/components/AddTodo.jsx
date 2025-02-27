import { useState } from 'react';

export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState('');
    const [warning, setWarning] = useState('');

    return (
        <div className='add-task'>
            <div className='add-task__input-cont'>
                <input
                    placeholder="Add todo"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                        if (e.target.value.replaceAll(' ', '').length > 0) {
                            setWarning("")
                        }
                    }}
                />
                {warning && <div className='warning'>{warning}</div>}
            </div>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setTitle('');
                    if (title.replaceAll(' ', '').length > 0) {
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