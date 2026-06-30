import React from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

const Project = () => {
  return (
    <div className='min-h-screen py-40 bg-black text-white'>
      <p className='font-thin text-9xl flex px-10'>Projects</p>
      <div className=" flex flex-col px-10  py-15">
        <img src={project4} alt="" srcset=""  className=" w-2/3 h-180 object-cover rounded-2xl "/>
        <img src={project3} alt="" srcset=""  className=" w-2/3 h-180 object-cover rounded-2xl ml-auto mt-10"/>
        <img src={project4} alt="" srcset=""  className=" w-2/3 h-180 object-cover rounded-2xl mt-10"/>
        {/* <div className="flex items-center gap-5 bg-gray-200 px-5 py-2 rounded-xl w-200 justify-center">                    
            <span className="text-gray-800 font-light text-2xl">
                            Currently based in India
            </span>
        </div> */}
        {/* <div className="bg-gray-200 p-10">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad, tempore, excepturi harum saepe similique deserunt dolor reprehenderit soluta officiis eligendi error nostrum consectetur ut consequuntur molestiae voluptatibus maxime quibusdam.</p>
        </div> */}
      </div>
      
    </div>
  )
}

export default Project
