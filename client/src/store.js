import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import conversationReducer from './slices/messageSlice'
import { apiSlice } from "./slices/apiSlice";
import dropdownReducer from './slices/dropdownSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        conversation: conversationReducer,
        dropdown: dropdownReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;