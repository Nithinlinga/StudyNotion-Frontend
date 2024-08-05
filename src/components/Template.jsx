import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from '../pages/LoginForm'
import SignUpForm from '../pages/SignUpForm'
import {FcGoogle} from "react-icons/fc"
const Template = ({title,desc1,desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className=' flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        <div >
            <h1 className=' text-richblack-5 font-semibold text-[1.875rem] lleaading-[2.385rem]'>{title}</h1>
            <p >
                <span className='text-richblack-100   '>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {
                formtype==="signup"?
                <SignUpForm setIsLoggedIn={setIsLoggedIn}/>:
                <LoginForm setIsLoggedIn={setIsLoggedIn}/>
            }
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className=' text-richblack-700 font-medium leading[1.375rem]'>Or</p>
                <div className=' w-full h-[1px] bg-richblack-700'></div>
            </div>
            <button className=' w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[18px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign Up with Gooogle</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img  src={frameImage} alt="mesh" height={504} width={558} loading='lazy' />
            <img src={image} className=' absolute -top-4 right-4' alt="mesh" height={490} width={558} loading='lazy' />
            
        </div>
    </div>
  )
}

export default Template