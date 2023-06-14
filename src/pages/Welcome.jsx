import React from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Welcome = () => {
  return (
    <div className='w-[100%] h-[100svh] welcome flex flex-col items-center justify-center'>
        <FaSearchPlus size={70} color='white'/>
        <h1 className='text-white text-5xl my-8 dope'>
            Welcome to SearchRound
        </h1>
        <Link to="/home">
            <button className='bg-[#5368df] hover:translate-y-3 text-white font-bold px-6 py-4 rounded-lg'>
                Start Searching
            </button>
        </Link>
    </div>
  )
}

export default Welcome