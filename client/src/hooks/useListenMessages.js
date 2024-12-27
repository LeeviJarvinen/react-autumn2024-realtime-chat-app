import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../slices/messageSlice"

const useListenMessages = () => {
    const {socket} = useSocketContext()
    const dispatch = useDispatch()
    const messages = useSelector((state) => state.conversation.messages)

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            dispatch(setMessages([...messages, newMessage]))
        };
        socket.on('newMessage', handleNewMessage);

        return () => {
            socket.off('newMessage', handleNewMessage);
        };
    }, [socket, messages, dispatch]);
};

export default useListenMessages