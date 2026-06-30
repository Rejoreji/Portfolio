import React from 'react'

const About = () => {
  return (
    <div className='py-30'>
      <p className='font-thin text-9xl flex px-10'>About me</p>

      <div className="flex flex-col px-100  py-15 items-center text-3xl font-thin">
         <p>I'm a <span className='font-medium'>Full Stack Developer </span> based in Bangalore, India, 
            passionate about building real-world applications that 
            solve real problems.</p>

        <p className=''>I work with the <span className='font-medium'>MERN</span> stack and have hands-on experience 
            integrating AI APIs, building mobile apps with React Native, 
            and deploying full-stack projects to production.</p>

      </div>
      <div className="flex justify-center">

        <button type="submit"
                className="bg-black hover:bg-white hover:text-black text-white font-light px-8 py-3  transition-all duration-200 cursor-pointer mt-5"
                >
                    download resume
                    
        </button>
      </div>

      <hr className='m-10'/>

       
    </div>
  )
}

export default About
