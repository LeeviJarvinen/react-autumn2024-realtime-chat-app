import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedConversation: null,
    messages: []
};

const messageSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        setSelectedConversation: (state, action) => {
            state.selectedConversation = action.payload;
        },
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        removeSelectedConversation: (state, action) => {
            state.selectedConversation = false
            state.messages = false
        }
    }
});

export const { 
    setSelectedConversation, 
    setMessages,
    removeSelectedConversation
} = messageSlice.actions;

export default messageSlice.reducer;
