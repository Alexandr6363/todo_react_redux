import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    }, 

    deleteTodo: (state, action) => {
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    },

    updateTodo: (state, action) => {
      return state.map((todo) => {
        return todo.id === action.payload.id ? {...todo, [todo]: action.payload.text} : todo
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoReducer.actions;
export const reducer = todoReducer.reducer;