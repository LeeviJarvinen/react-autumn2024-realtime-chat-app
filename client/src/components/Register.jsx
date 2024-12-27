import Footer from './Footer'
import React, { useState } from 'react'
import { Lock, Mail, User, ChevronLeft } from 'lucide-react';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [register, {isLoading}] = useRegisterMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = formData.username
        const email = formData.email
        const password = formData.password
        const confirmPassword = formData.confirmPassword



        if(password !== confirmPassword || confirmPassword !== password) {
            console.log('passwords do not match')
            passMatch = true
        }
        else {
            try {
                const res = await register({username, email, password}).unwrap();
                dispatch(setCredentials({...res}))
                navigate('/')
            } catch (err) {
                console.log(err?.data?.message || err.error)
            }
        }
    }
    
  return (
      <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
              <div className="card sm:max-w-md shadow-lg bg-indigo-100 border-4 border-primary">
                  <div className="card-body gap-1">
                      <h5 className="card-title pb-2.5 text-center">Create account</h5>
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
                              <span className="label-text">Email</span>
                          </div>
                          <input
                              type="email"
                              placeholder="Example@Email.com"
                              className="input"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                      <label className="form-control w-96">
                          <div className="label">
                              <span className="label-text">Confirm Password</span>
                          </div>
                          <input
                              type="password"
                              placeholder="Confirm Password"
                              className="input"
                              value={formData.confirmPassword}
                              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          />
                      </label>
                      <div className="card-actions pt-8 justify-center">
                          <button className="btn btn-block btn-primary" type='submit'>Register</button>
                      </div>
                      <div className="pt-4 text-center text-sm">
                          <span className="text-gray-500">Already have an account? </span>
                          <Link to="/login" className="text-blue-500 hover:underline">
                              Sign in
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </form>
  )

}

export default Register