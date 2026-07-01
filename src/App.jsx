import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>

        <Navbar/>

        <section data-theme="light" className='sticky top-0 h-screen z-10'>
          <Hero/>
        </section>

         <div className=''>
          <div data-theme="dark" className="sticky h-screen z-20 ">
            <Project/>
          </div> 

          {/* Spacer */}
          <div data-theme="dark"  className=" h-[190vh]" />
        </div>
         
        <section data-theme="light" className="sticky top-0 h-screen z-30 bg-white ">
          <About/>
        </section>

        <section className=" sticky top-0 h-screen z-40 ">
           <Contact/>
           <Footer/>
        </section>
        
          
       
    </div>
  )
}

export default App
