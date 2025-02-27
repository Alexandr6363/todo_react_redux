import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id:0, title:"Установить React"},
        {id:1, title:"Написать приложение на React"},
        {id:2, title:"Добавить Redux"},
        {id:3, title:"Добавить оформление"},
        {id:4, title:"Добавить адаптивности"},
        {id:5, title:"Исправить баги"},
        {id:6, title:"Написать README"},
    ],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: action.payload.id,
                title: action.payload.title,
            };
            state.push(todo);
        },

        updateTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].title = action.payload.title
        },

        deleteTodo: (state, action) => {
            return state.filter((todo) => {
                return todo.id !== action.payload;
            });
        },
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;