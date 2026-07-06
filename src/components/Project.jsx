import { motion } from "framer-motion"
import { useState } from "react"
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'

const projects = [
  {
    id: 1,
    image: project4,
    title: "ResumeIQ",
    description: "AI-powered resume analyzer using Google Gemini 2.5 Flash. Analyzes resumes and provides detailed feedback with scores, strengths and suggestions.",
    tags: ["React", "Node.js", "Gemini AI", "Express"],
    live: "https://resume-iq-rouge.vercel.app/",
    github: "https://github.com/Rejoreji/ResumeIQ",
    align: "left",   // image left, details right
  },
  {
    id: 2,
    image: project3,
    title: "KicksLab",
    description: "Full stack e-commerce platform for sneakers built with MERN stack. Features JWT auth, product management and order tracking.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    live: "https://kickslab-seven.vercel.app/",
    github: "https://github.com/Rejoreji/kickslab",
    align: "right",  // image right, details left
  },
  {
    id: 3,
    image: project4,
    title: "Itinerai",
    description: "AI travel planner that generates personalized day-by-day itineraries with real price breakdowns using Gemini API.",
    tags: ["React", "Gemini AI", "Tailwind", "Express"],
    live: "#",
    github: "https://github.com/Rejoreji",
    align: "left",   // image left, details right
  },
]

  const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const isRight = project.align === "right"

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex items-center gap-10 ${
        isRight ? "flex-row-reverse" : "flex-row"
      }`}
    >

      {/* ── Image Side ── */}
      <div
        className="relative w-2/3 h-180 rounded-2xl overflow-hidden cursor-none shrink-0 "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={() => window.open(project.live, "_blank")}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Dark overlay on hover */}
        <div className={`absolute inset-0  backdrop-blur-[5px] transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`} />

        {/* Custom cursor — follows mouse */}
        {hovered && (
          <div
            className="absolute pointer-events-none z-10 flex items-center justify-center"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="bg-white text-black text-xs font-light px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
              Live Demo →
            </div>
          </div>
        )}

      </div>

      {/* ── Details Side ── */}
      <div className={`w-1/2 flex flex-col gap-5 ${
        isRight ? "items-end text-right" : "items-start text-left"
      }`}>

        {/* Project number */}
        <p className="text-gray-600 text-sm font-bold uppercase tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </p>

        {/* Title */}
        <h3 className="text-white text-5xl font-thin leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className={`flex flex-wrap gap-2 ${
          isRight ? "justify-end" : "justify-start"
        }`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          
           <a href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-[#F9452E] hover:text-white text-black font-light px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:scale-105"
          >
            Live Demo →
          </a>
          
           <a href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 hover:border-[#F9452E] text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-200"
          >
            GitHub
          </a>
        </div>

      </div>

    </motion.div>
  )
}

const Project = () => {
  return (
    <div className="w-full py-32  bg-black text-white" id="project">

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-thin text-9xl px-10 mb-20"
      >
        Projects
      </motion.p>

      {/* Cards */}
      <div className="flex flex-col px-10 gap-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

    </div>
  )
}

export default Project