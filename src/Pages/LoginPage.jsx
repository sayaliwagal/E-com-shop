import React, { useState } from 'react'

import { useAuth } from '../Utils/Context/AuthContext'
import { useNavigate } from 'react-router'
const LoginPage = () => {
    const {login} = useAuth();
    const navigate = useNavigate();

    const [ email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");

    const handLogin = () => {
      e.preventDefault();
      const success= login(email, password);
      if(success)
        navigate("/");
    };
  return (
    <form 
    onSubmit={handLogin} 
    className="max-w-md mx-auto mt-32 p-8 shadow rounded">
      <input 
      placeholder="Email"
      className="border p-2 w-full mb-3"
      onChange={(e) => setEmail(e.target.value)}
      />
      <input
      placeholder="Password"
      type="password"
      className="border p-2 w-full mb-3"
      onChange={(e) => setPassword(e.target.value)}
      />

      <button 
      className="bg-yellow-500 w-full p-2">
        Login
      </button>
    </form>
  )
}

export default LoginPage
