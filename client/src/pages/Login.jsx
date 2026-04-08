import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import Home from './Home'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const {setIsUserLogin , userinfo} = useContext(AppContext)


  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">

      {/* Center Section */}
      <div className="flex flex-col items-center justify-center flex-1">

        {/* Card */}
        <div className="bg-white w-[360px] p-8 rounded-xl shadow-sm border">

          {/* Logo */}
          <h1 className="text-2xl font-semibold text-center mb-1 text-orange-500">
            Crave
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Sign in to your account
          </p>

          {/* Form */}
          <div className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
              className="border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-orange-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
              className="border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-orange-400"
            />

            <button 
            onClick={ () => {
               const check =  userinfo.find( (user) => email === user.email && password === user.password )
              if(check) {
                setIsUserLogin(true)
                navigate('/home')
              }
              else{
                alert("Eamil or Password is incorrect")
              }
            } }
          
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center gap-2">
              <hr className="flex-1 border-gray-200" />
              <span className="text-xs text-gray-400">OR</span>
              <hr className="flex-1 border-gray-200" />
            </div>

            {/* Google Button */}
            <button className="border py-2 rounded-md hover:bg-gray-50 transition">
              Continue with Google
            </button>

            {/* Links */}
            <div className="flex justify-between text-xs text-gray-500">
              <span className="cursor-pointer hover:underline">
                Forgot password?
              </span>
              <span className="cursor-pointer hover:underline">
                Create account
              </span>
            </div>

          </div>
        </div>

        {/* 🔥 Food Images Section (Important part from your design) */}
        <div className="flex gap-4 mt-8">

          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
            alt="burger"
            className="w-20 h-20 object-cover rounded-lg shadow-sm"
          />

          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="salad"
            className="w-20 h-20 object-cover rounded-lg shadow-sm"
          />

          <img
            src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww"
            alt="pizza"
            className="w-20 h-20 object-cover rounded-lg shadow-sm"
          />

        </div>

      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-4">
        © 2026 Crave. All rights reserved.
      </footer>

    </div>
  )
}

export default Login