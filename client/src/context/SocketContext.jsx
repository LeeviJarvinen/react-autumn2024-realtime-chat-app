import { createContext, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import io from 'socket.io-client'

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
        if (userInfo) {
            const socket = io("http://localhost:3001", {
                query: {
                    userId: userInfo._id
                }
            })
                
            setSocket(socket)
            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close();
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [userInfo])

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext