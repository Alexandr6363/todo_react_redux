import { useState } from 'react';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';

let Id = 0;

export default function App() {
    const [todos, setTodos] = useState([]);

    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: Id++,
                title: title,
            },
        ]);
    }

    function handleChangeTodo(newTodo) {
        setTodos(
          todos.map((todo) => todo.id === newTodo.id ? newTodo : todo))
    }

    function handleDeleteTodo(todoId) {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    }

    return (
        <>
            <TodoList
                todos={todos}
                updateTodo={handleChangeTodo}
                deleteTodo={handleDeleteTodo}
            />
            <AddTodo addTodo={handleAddTodo} />
        </>
    );
}
