import React from "react";
import { useState } from "react";

export default function Task({ todo,
    updateTodo,
    deleteTodo
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [warning, setWarning] = useState("")

    function handleSumbit(todo) {
        if (todo.title.replaceAll(' ', '').length > 0) {
            setWarning("")
            setIsEditing(false)
        }
        else {
            setWarning("You can't save empty task!")
        }
    }
    if (isEditing) {
        return (
            <div className="list-of-task__task__cont">
                <div className="list-of-task__task__cont">
                    <input type="text"
                        value={todo.title}
                        onChange={(e) => {
                            updateTodo({
                                id: todo.id,
                                title: e.target.value,
                            })
                        }}
                    />
                    {warning && <div className='warning'>{warning}</div>}
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => { handleSumbit(todo) }}>Save</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="list-of-task__task__cont">
                <div className="list-of-task__task__cont__title">
                    {todo.title}
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => { setIsEditing(true) }}>Edit</button>
                    <button className="btn btn-primary" onClick={() => {
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