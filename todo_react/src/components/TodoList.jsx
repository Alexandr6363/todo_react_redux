import Todo from './Todo';

export default function TaskList({
    todos,
    updateTodo,
    deleteTodo,
}) {
    if (todos.length > 0) {
        return (
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}>
                        <Todo
                            todo={todo}
                            updateTodo={updateTodo}
                            deleteTodo={deleteTodo}
                        />
                    </li>
                ))}
            </ul>
        )
    }
    else {
        return <div> Empty task</div>
    }
}

