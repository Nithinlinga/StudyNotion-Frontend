import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"


const SignUp = ({setIsLoggedIn}) => {
 
  return (
    <div className='bg-richblack-900'>
      <Template
      title="Join themillions learning to code with StudyNotion for free"
      desc1="Build skills fro today, tommorow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      />
      </div>
  )
}

export default SignUp