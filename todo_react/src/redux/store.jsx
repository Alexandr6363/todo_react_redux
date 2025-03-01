import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer';

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});