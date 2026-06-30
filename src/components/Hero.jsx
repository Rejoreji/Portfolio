import React from 'react'
import profile from "../assets/profilePic.jpg"
import { FiGlobe } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center px-10 justify-between'>
        <div className='flex flex-col text-[85px]'>
            <p>
                Hello world 
            </p>
            <p>
                I'm Rejo, a Full Stack Developer
            </p>
        </div>
        <div className="flex flex-col items-center gap-10">
            <img src={profile} alt="" srcset="" className="w-100 h-120 object-cover rounded-[50px]" />
            <div className="flex items-center gap-5 bg-gray-200 px-5 py-2 rounded-full w-full justify-center">
                <FiGlobe size={70} className="text-gray-800" />
                <span className="text-gray-800 font-light text-2xl">
                    Currently based in India
                </span>
            </div>
        </div>
    </section>
  )
}

export default Hero
