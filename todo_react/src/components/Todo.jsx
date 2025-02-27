import React from "react";
import { useState } from "react";

export default function Task({ todo,
    updateTodo,
    deleteTodo
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [warning, setWarning] = useState("")

    function handleSumbit(todo) {
        if (todo.title.length > 0) {
            setWarning("")
            setIsEditing(false)
        }
        else {
            setWarning("You can't save empty task!")
        }
    }
    if (isEditing) {
        return (
            <div >
                <div><input type="text"
                    value={todo.title}
                    onChange={(e) => {
                        updateTodo({
                            id: todo.id,
                            title: e.target.value,
                        })
                    }}
                />
                </div>
                {warning && <div>{warning}</div>}
                <div>
                    <button onClick={() => { handleSumbit(todo) }}>Save</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div>
                    {todo.title}
                </div>
                <div>
                    <button onClick={() => { setIsEditing(true) }}>Edit</button>
                    <button onClick={() => {
                        const result = confirm('Do you really want to delete this task?')
                        if (result) {
                            deleteTodo(todo.id)
                        }
                    }}>Delete</button>
                </div>
            </div>
        )

    }
}