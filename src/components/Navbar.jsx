import { useState, useEffect, React }  from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const Navbar = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const sections = document.querySelectorAll("[data-theme]")

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const theme = entry.target.getAttribute("data-theme")
                setIsDark(theme === "dark")
            }
            })
        },
        { threshold: 0.5 } // triggers when 50% of section is visible
        )

        sections.forEach((section) => observer.observe(section))

        return () => observer.disconnect()
    }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 transition-colors duration-500 `}>
        <div className="flex items-center justify-between py-5 px-10 ">
            <div class="w-1/4 invisible md:block"></div>
            <div className={`flex gap-5 justify-center w-full md:w-auto transition-colors duration-200 ${isDark ? "text-white" : "text-black"} `}>
                
                <a href="" className='hover:text-gray-500'>project</a>
                <a href="" className='hover:text-gray-500'>about</a>
                <a href="" className='hover:text-gray-500'>contact</a>
            </div>
            <div className={`flex items-center justify-end w-1/4 gap-5 transition-colors duration-200 ${isDark ? "text-white" : "text-black"} `}>
                
                <a href="https://github.com/Rejoreji"><FaGithub className='size-5' /></a>
                <a href="https://www.linkedin.com/in/rejo-raji/"><FaLinkedin className='size-5'/></a>
                <a href="mailto:rejoreji98@gmail.com"><IoMail className='size-6' /></a>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar
