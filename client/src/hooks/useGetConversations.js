import { useGetUsersQuery } from '../slices/usersApiSlice';
import { useState } from 'react';

const useGetConversations = () => {
    const { data: conversations = [], isLoading: loading, error } = useGetUsersQuery();

    if (error) {
        console.log(error)
    }
    return { 
        conversations, 
        loading 
    };
};

export default useGetConversations;
