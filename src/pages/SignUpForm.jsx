import React, { useState } from 'react'
import toast from 'react-hot-toast'

import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
const SignUpForm = ({setIsLoggedIn}) => {
  const navigate=useNavigate();
    const [formData,setFormData]=useState({firstname:"",
        lastname:"", 
        email:"",
        password:"",
        confirmpassword:""})
        function changeHandler(event){
          setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
          })
        )
        }
        const [showpassword,setShowPassword]=useState(false);

        function submitHandler(event) {
          event.preventDefault();
          if(formData.password != formData.confirmpassword) {
              toast.error("Passwords do not match");
              return ;
          }
  
          setIsLoggedIn(true);
          toast.success("Account Created");
          const accountData = {
              ...formData
          };
          console.log("printing account data ");
          console.log(accountData);
  
          navigate("/dashboard");
  
      }
  return (
    <div>
      <div className=' text-richblack-5'>
        <button>student</button>
        <button>Instructor</button>
      </div>
      <div >
          <form onSubmit={submitHandler}>
            <div>
            <label >
              <p className='text-[0.75rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
              <input type="text"
              name='firstname'
              placeholder='First Name'
              onChange={changeHandler}
              required
              value={formData.firstname}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
            </label>

            <label >
              <p className='text-[0.75rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
              <input type="text"
              name='lastname'
              placeholder='Last Name'
              onChange={changeHandler}
              required
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              value={formData.lastname} />
            </label>
           
            <label >
              <p className='text-[0.75rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
              <input type="text"
              name='email'
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              placeholder='Email Address'
              onChange={changeHandler}
              required
              value={formData.email} />
            </label>
            <label >
              <p className='text-[0.75rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
              <input type={showpassword ? ("text"):("password")}
              name='password'
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              placeholder='password'
               autoComplete='on'
              onChange={changeHandler}
              required
              value={formData.password} />
              <span className=' absolute right-3 top-[38px] cursor-pointer'  onClick={()=>setShowPassword((prev)=> !prev)}>{showpassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}</span>
            </label>
            <label className=' relative' >
              <p className='text-[0.75rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
              <input type={showpassword ? ("text"):("password")}
              name='confirmpassword'
               autoComplete='on'
              placeholder='Confirm Password'
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              required
              value={formData.confirmpassword} 
              />
              <span className=' absolute right-3 top-[38px] cursor-pointer'  onClick={()=>setShowPassword((prev)=> !prev)}>{showpassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
              (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}</span>
            </label>
            </div>
          <button className=' text-richblack-5'>Create Account</button>
          </form>
      </div>
    </div>
  )
}

export default SignUpForm