import { useSelector, useDispatch } from "react-redux";
import { useSendMsgMutation } from "../slices/messagesApiSlice";
import { setMessages } from "../slices/messageSlice";

const usePostMessage = () => {
    const dispatch = useDispatch();
    
    const [sendMsg, { isLoading: loading }] = useSendMsgMutation();
    
    const messages = useSelector(state => state.conversation.messages);
    const selectedConversation = useSelector(state => state.conversation.selectedConversation);

    //laita backendiin ehdot jossain vaiheessa.
    const sendMessage = async (message) => { 
        if (!message.trim()) {
            console.log("Message cannot be empty");
            return;
        }

        if (!selectedConversation?._id) {
            console.log("No conversation selected");
            return;
        }

        try {
            const sentMessage = await sendMsg({
                id: selectedConversation._id, 
                message 
            }).unwrap();

            dispatch(setMessages([...messages, sentMessage]));

            return sentMessage;
        } catch (error) {
            console.log(error?.data?.message || "Failed to send message");
            console.error("Send message error:", error);
            return null;
        }
    };

    return { sendMessage, loading };
};

export default usePostMessage;