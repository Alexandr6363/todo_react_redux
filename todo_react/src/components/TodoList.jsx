import Todo from './Todo';

export default function TaskList({
    todos,
    updateTodo,
    deleteTodo,
}) {
    if (todos.length > 0) {
        return (
            <ul className='list-of-task list-group'>
                {todos.toReversed().map((todo) => (
                    <li className='list-of-task__task list-group-item'
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

