import React from 'react'
import profile from "../assets/profilePic2.jpg"
import { FiGlobe } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col md:flex-row items-center md:px-10 px-6 md:justify-between pt-24 md:gap-10 gap-20 ' id='hero'>
        <div className='flex flex-col md:text-[80px] text-3xl'>
            <p>
                Hello world 
            </p>
            <p>
                I'm Rejo, a Full Stack Developer
            </p>
        </div>
        <div className="flex flex-col items-center md:gap-10 pb-10 gap-2">
            <div className="w-80 h-100 md:w-100 md:h-120 overflow-hidden rounded-[40px] md:rounded-[50px]">
                <img src={profile} alt="" srcset="" className="w-200 h-150 object-cover " />
            </div>
            
            <div className="flex items-center gap-5 bg-gray-200 px-4 py-2 rounded-full w-full justify-center">
                <FiGlobe size={70} className="text-gray-800" />
                <span className="text-gray-800 font-light text-[18px]">
                    Currently based in Bangalore, India
                </span>
            </div>
        </div>
    </section>
  )
}

export default Hero
