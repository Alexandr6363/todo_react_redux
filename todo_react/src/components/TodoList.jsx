import Todo from './Todo';
import { useState } from 'react';

export default function TaskList({
    todos,
    updateTodo,
    deleteTodo,
}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Todo
                        todo={todo}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

