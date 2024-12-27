import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { Lock, User, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, {isLoading}] = useLoginMutation()
    const { userInfo } = useSelector((state) => state.auth)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = formData.username
        const password = formData.password

        const res = await login({username, password}).unwrap();
        dispatch(setCredentials({...res}))
        navigate('/')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center">
                <div className="card sm:max-w-md shadow-lg bg-indigo-100 border-4 border-primary">
                    <div className="card-body gap-1">
                        <h5 className="card-title pb-2.5 text-center">Login</h5>
                        <label className="form-control w-96">
                            <div className="label">
                                <span className="label-text">Username</span>
                            </div>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="input"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />
                        </label>
                        <label className="form-control w-96">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </label>
                        <div className="card-actions pt-8 justify-center">
                            <button className="btn btn-block btn-primary" type='submit'>Login</button>
                        </div>
                        <div className="pt-4 text-center text-sm">
                            <span className="text-gray-500">Create an account? </span>
                            <Link to="/register" className="text-blue-500 hover:underline">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login