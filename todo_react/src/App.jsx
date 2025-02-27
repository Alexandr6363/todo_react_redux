import { useState } from 'react';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import { useSelector } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './redux/reducer.jsx';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleAddTodo(title) {
    dispatch(
      addTodo({
        title: title,
        id: todos.length + 1,
      }))
  }

  function handleChangeTodo(todo) {
    dispatch(
      updateTodo(todo))
  }

  function handleDeleteTodo(todoId) {
    dispatch(
      deleteTodo(todoId))
  }

  return (
    <div className='main'>
      <div></div>
      <div>
        <div className='main__title-text'>
          <h1>ToDo app CRUD</h1>
        </div>
        <AddTodo
          addTodo={handleAddTodo}
        />
        <TodoList
          todos={todos}
          updateTodo={handleChangeTodo}
          deleteTodo={handleDeleteTodo}
        />
      </div>
      <div></div>
    </div>
  );
}
