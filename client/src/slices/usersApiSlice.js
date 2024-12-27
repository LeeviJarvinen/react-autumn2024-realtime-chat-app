import { apiSlice } from "./apiSlice";

const URL = '/api'

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${URL}/users/login`,
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${URL}/users/register`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: `${URL}/users/logout`,
                method: 'POST',
                body: data,
            }),
        }),
        getUsers: builder.query({
            query: () => ({
                url: `${URL}/users/users`,
                method: 'GET',
            }),
        }),
        getProfile: builder.query({
            query: () => ({
                url: `${URL}/users/users`,
                method: 'GET',
            }),
        })
    })
})

export const { 
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useGetUsersQuery

 } = userApiSlice;