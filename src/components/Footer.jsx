import React from 'react'

const Footer = () => {
  return (
    <footer className='flex px-6 md:px-10 pt-10 md:pt-15 pb-6 bg-black min-h-60 md:min-h-80'>
        <div className="flex flex-col w-full ">
            <p className='font-semibold text-4xl text-white md:text-4xl text-center md:flex'>Lets Work Together</p>
            <div className="">
                {/* <button
                  type="submit"
                  className="bg-white hover:bg-black hover:text-white text-black font-light px-8 py-3 transition-all duration-200  cursor-pointer mt-5"
                >
                    contact now 
                </button> */}
              </div>
              <p className='text-white font-medium  mt-0 text-center' style={{ fontSize: "clamp(2rem, 18vw, 20rem)" }}>REJO RAJI</p>

        </div>
        
    </footer>
  )
}

export default Footer
