import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-10'>
        <p className='font-poppins text-3xl font-bold '>Navigate to Home Page</p>

        {/* Navigate to the Home Page */}
        <Link to={"/home"}>

            <div className='text-center text-[13px] px-6 py-3 rounded-md font-bold
             bg-yellow-500 text-black hover:scale-95 transition-all duration-300' >
                HOME PAGE
            </div>

        </Link>
    </div>
  )
}

export default LandingPage