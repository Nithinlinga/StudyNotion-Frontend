import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {
  
  const navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""})
  const [showPassword,setShowPassword]=useState(false)
  function changeHandler(event){
        setFormData((prevData)=>({
          ...prevData,
          [event.target.name]:event.target.value
        })
      )
  }
  function submitHandler(event){
      event.preventDefault();
      setIsLoggedIn(true);
      toast.success("Logged In");
      navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
      <div>
      <label className='w-full'>
        <p className='text-[0.75rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
         type="text"
        required
        value={formData.email}
        onChange={changeHandler}
        placeholder='Email Address'
        name='email'
        />

      </label>
      <label className=' relative' >
        <p className='text-[0.75rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>
        <input type={showPassword?("text"):("password")}
        required
        value={formData.password}
        onChange={changeHandler}
        autoComplete='on'
        placeholder='Password'
        name='password'
        className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        <span
        className=' absolute right-3 top-[73px] cursor-pointer' 
        onClick={()=>setShowPassword((prev)=> !prev)}>
          {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
        </span>
        <Link to="#">
        <p className=' text-ssxs mt-1 w-full text-blue-100 ml-auto max-w-max'>forgot password</p>
        </Link>
      </label>
      <button
      className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]'
      type='submit'>Log In</button>
      </div>
    </form>
  )
}

export default LoginForm