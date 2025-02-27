import React from "react";
import { useState } from "react";

export default function Task({ todo, updateTodo, deleteTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={(e) => {
                        updateTodo({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            {todoContent}
            <button onClick={() => deleteTodo(todo.id)}>
                Delete
            </button>
        </label>
    );
}