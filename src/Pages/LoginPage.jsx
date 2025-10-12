import React from 'react'
import CartContext from '../Utils/Context/CartContext'
import { useContext } from 'react'
const LoginPage = () => {
    const {login} = useContext(CartContext);
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default LoginPage
