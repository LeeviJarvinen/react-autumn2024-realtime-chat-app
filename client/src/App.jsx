import { 
  Route, 
  BrowserRouter,
  Routes,
  Navigate
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ChatPage from './pages/ChatPage'

import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import ChatLayout from './layout/ChatLayout'
import { useSelector } from 'react-redux'
import NotFoundPage from './pages/NotFoundPage'
import PersistentLayout from './layout/PersistentLayout'




function App() {
  const { userInfo } = useSelector((state) => state.auth)
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage />} />
            <Route path='/*' element={<NotFoundPage />} />
            <Route path='/chat' element={userInfo ? <ChatPage /> : <Navigate to={'/'}/>} />
            <Route path='login' element={userInfo ? <Navigate to={'/chat'}/> : <LoginPage/>} />
            <Route path='register' element={userInfo ? <Navigate to={'/chat'}/> : <RegisterPage/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App