import { useState, useEffect}  from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const Navbar = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
    const handleScroll = () => {
    const sections = document.querySelectorAll("[data-theme]")
    const scrollPos = window.scrollY  // navbar height offset

    sections.forEach((section) => {
      const top = section.offsetTop
      const bottom = top + section.offsetHeight

      if (scrollPos >= top && scrollPos < bottom) {
        const theme = section.getAttribute("data-theme")
        setIsDark(theme === "dark")
      }
    })
  }

  // run once on mount to set initial state
  handleScroll()

  window.addEventListener("scroll", handleScroll, { passive: true })
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-90 transition-colors duration-500 ${
      isDark ? "bg-black/20  backdrop-blur-md" : "bg-white/10 backdrop-blur-sm"
    }`}>
        <div className="flex items-center justify-between py-5 px-10 ">
            <div className="w-1/4 invisible md:block"></div>
            <div className={`flex gap-5 justify-center w-full md:w-auto transition-colors duration-200 ${isDark ? "text-white" : "text-black"} `}>
                
                <a href="#project" className='hover:text-[#F9452E]'>project</a>
                <a href="#about" className='hover:text-[#F9452E]'>about</a>
                <a href="#contact" className='hover:text-[#F9452E]'>contact</a>
            </div>
            <div className={`flex items-center justify-end w-1/4 gap-5 transition-colors duration-200 ${isDark ? "text-white" : "text-black"} `}>
                
                <a href="https://github.com/Rejoreji"><FaGithub className='size-5 hover:text-[#F9452E]' /></a>
                <a href="https://www.linkedin.com/in/rejo-raji/"><FaLinkedin className='size-5 hover:text-[#F9452E]'/></a>
                <a href="mailto:rejoreji98@gmail.com"><IoMail className='size-6 hover:text-[#F9452E]' /></a>
            </div>
        </div>
    </nav>
  )

}

export default Navbar
