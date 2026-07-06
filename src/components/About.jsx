import React from 'react'


const About = () => {
  return (
    <div className='py-30' id='about'>
      <p className='font-thin text-9xl flex px-10'>About me</p>

      <div className="flex flex-col px-100  py-15 items-center text-3xl font-thin">
         <p>Hey! I'm a <span className='font-medium'>Full Stack Developer </span> based in Bangalore, India, 
            passionate about building real-world applications that 
            solve real problems.</p>

        <p className=''>I work with the <span className='font-medium'>MERN</span> stack and have hands-on experience 
            integrating AI APIs, building mobile apps with React Native, 
            and deploying full-stack projects to production.</p>

      </div>
      <div className="flex justify-center">
        <a href="/Rejo_Resume.pdf" download="Rejo_Resume.pdf">

          <button className="px-6 py-2.5 font-normal text-xl border  text-black cursor-pointer hover:bg-[#F9452E] hover:text-white transition-all duration-400 ">
    
          Download Resume
          </button>
        </a>
      </div>

      <hr className='m-10'/>

       
    </div>
  )
}

export default About
