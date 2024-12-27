import UserConversation from './UserConversation'
import useGetConversations from '../hooks/useGetConversations'

const UserConversations = () => {
    const {conversations, loading} = useGetConversations();

  return (
    <div className='rounded-xl flex flex-col w-96 overflow-y-auto bg-primary/40 backdrop-blur-xl p-2'>
        {conversations.map((conversation, index) => (
            <UserConversation
            key={conversation._id}
            conversation={conversation}
            />
        ))} 
    </div>
  )
}

export default UserConversations