import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"
function Login({setIsLoggedIn}) {
  return (
    <div  >

    <Template
    title="Welcome Back"
    desc1="Build skills for today, tommorow, and beyond"
    desc2="Education to futrue-proof your career"
    formtype="login"
    image={loginImg}
    setIsLoggedIn={setIsLoggedIn}
    />

    
    </div>
  )
}

export default Login;