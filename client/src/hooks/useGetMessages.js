import { useGetMsgQuery } from '../slices/messagesApiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages } from '../slices/messageSlice';
import { useState, useEffect } from 'react';

const useGetMessages = () => {
    const dispatch = useDispatch();
    const selectedConversation = useSelector(state => state.conversation.selectedConversation);
    
    const { data: fetchedMessages, isLoading: loading, error } = useGetMsgQuery(
        selectedConversation?._id, 
        { skip: !selectedConversation?._id }
    );

    useEffect(() => {
        if (fetchedMessages) {
            dispatch(setMessages(fetchedMessages));
        }
        if (error) {
            console.log('Failed to fetch messages');
        }
    }, [fetchedMessages, error, dispatch]);

    const messages = useSelector(state => state.conversation.messages);

    return { 
        messages, 
        loading 
    };
};

export default useGetMessages;