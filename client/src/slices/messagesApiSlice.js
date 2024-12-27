import { apiSlice } from "./apiSlice";

const URL = '/api'

export const messagesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMsg: builder.query({
            query: (id) => ({
                url: `${URL}/messages/${id}`,
                method: 'GET',
            }),
        }),
        sendMsg: builder.mutation({
            query: ({id, message}) => ({
                url: `${URL}/messages/send/${id}`,
                method: 'POST',
                body: {message},
            }),
        }),
    })
})

export const { 
    useGetMsgQuery,
    useSendMsgMutation

 } = messagesApiSlice;