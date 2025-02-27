import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import {toast} from "react-hot-toast"
const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
   
  return ( 
    <div className=' flex  justify-between w-11/12 items-center max-w-[1160] py-4 mx-auto'>
        <Link to="/">
        <img src={logo} width={160} alt='logo' height={32} loading='lazy'/>
        </Link>
        <nav>
            <ul className=' text-white flex gap-3  text-lg font-sans font-semibold'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>

            </ul>
        </nav>
        <div className='text-white flex items-center gap-x-4'>
            {
             !isLoggedIn?   
            <Link to="/login">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                    Login</button>
            </Link>:
            <Link to="/dashboard">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
            </Link>
            }
            {
            !isLoggedIn ?
            <Link to="/signup">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</button>
            </Link>:
            <Link to="/">
                <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700' onClick={()=>{
                    setIsLoggedIn(false);
                    
                    toast.success("Logged Out")
                }}>Log Out</button>
            </Link>
            }
            
    

            
        </div>
    </div>
  )
}

export default Navbar