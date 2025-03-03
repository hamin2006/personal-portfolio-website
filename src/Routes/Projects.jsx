import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Footer from "../Components/Footer"

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "Forum AI",
    description: "ForumAI is an online platform which enables AI assistance in structured academic forums, facillitating discussions between students and faculty. We've leveraged Retrieval Augmented Generation (RAG) model to provide users with relevant answers to their questions based off their course content and discussions.", 
    tags: ["React.js", "TailwindCSS", "FastAPI", "AWS", "TypeScript", "PostgreSQL", "Docker", "RAG", "LangChain"],
    image: "/forumai.png",
    github: "https://github.com/ubclaunchpad/forum",
    live: "https://forumai.me",
    color: "#4ECDC4",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered application that generates custom content based on user prompts.",
    tags: ["React", "OpenAI API", "Firebase", "TailwindCSS"],
    image: "/placeholder.svg?height=600&width=800",
    github: "https://github.com/yourusername/project2",
    live: "https://project2.yourdomain.com",
    color: "#39A0ED",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description: "A mobile-responsive application to track workouts, nutrition, and fitness goals.",
    tags: ["React", "Chart.js", "Express", "PostgreSQL"],
    image: "/placeholder.svg?height=600&width=800",
    github: "https://github.com/yourusername/project3",
    live: "https://project3.yourdomain.com",
    color: "#FF5E5B",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard to manage and analyze social media accounts.",
    tags: ["React", "Redux", "Social APIs", "D3.js"],
    image: "/placeholder.svg?height=600&width=800",
    github: "https://github.com/yourusername/project4",
    live: "https://project4.yourdomain.com",
    color: "#FFD166",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "A real-time messaging platform with video calling capabilities.",
    tags: ["React", "Socket.io", "WebRTC", "Firebase"],
    image: "/placeholder.svg?height=600&width=800",
    github: "https://github.com/yourusername/project5",
    live: "https://project5.yourdomain.com",
    color: "#F86624",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const nextProject = () => {
    setDirection(1)
    setActiveProject((prev) => (prev === null ? 0 : (prev + 1) % projectsData.length))
  }

  const prevProject = () => {
    setDirection(-1)
    setActiveProject((prev) =>
      prev === null ? projectsData.length - 1 : (prev - 1 + projectsData.length) % projectsData.length,
    )
  }

  const selectProject = (index) => {
    setDirection(index > (activeProject || 0) ? 1 : -1)
    setActiveProject(index)
  }

  useEffect(() => {
    if (activeProject === null) {
      const interval = setInterval(() => {
        nextProject()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [activeProject])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 text-white pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-2 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A showcase of my recent work and passion projects
        </motion.p>

        <div className="relative" ref={constraintsRef}>
          {/* 3D Project Showcase */}
          <div className="relative h-[500px] mb-16">
            <AnimatePresence mode="wait" custom={direction}>
              {activeProject !== null && (
                <motion.div
                  key={projectsData[activeProject].id}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 300 : -300,
                    rotateY: direction > 0 ? 45 : -45,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -300 : 300,
                    rotateY: direction > 0 ? -45 : 45,
                    transition: { duration: 0.3 },
                  }}
                  className="absolute inset-0 w-full"
                >
                  <ProjectCard project={projectsData[activeProject]} isActive={true} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevProject}
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-3">
              {projectsData.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => selectProject(index)}
                  className={`w-3 h-3 rounded-full ${activeProject === index ? "bg-white" : "bg-white/30"}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    backgroundColor: activeProject === index ? project.color : "rgba(255, 255, 255, 0.3)",
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextProject}
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Project Thumbnails */}
          <motion.div
            className="flex gap-4 pt-3 pb-10 px-2 snap-x no-scrollbar"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                className={`snap-center cursor-pointer flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden relative
                  ${activeProject === index ? "ring-2 ring-offset-2" : "opacity-70 hover:opacity-100"}`}
                style={{
                  ringColor: project.color,
                  transform: `perspective(1000px) rotateY(${activeProject === index ? 0 : 0}deg)`,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.2 },
                }}
                onClick={() => selectProject(index)}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="text-sm font-medium p-2 truncate w-full">{project.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function ProjectCard({ project, isActive }) {
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden h-full shadow-2xl"
      style={{
        boxShadow: `0 10px 30px -5px ${project.color}40, 0 0 5px ${project.color}20`,
        background: `linear-gradient(135deg, #1f2937 0%, #111827 100%)`,
      }}
      layoutId={`project-card-${project.id}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br"
            style={{
              background: `linear-gradient(135deg, ${project.color}20 0%, transparent 100%)`,
              mixBlendMode: "overlay",
            }}
          />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </motion.div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <motion.div
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ backgroundColor: `${project.color}30`, color: project.color }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Featured Project
            </motion.div>

            <motion.h2
              className="text-3xl text-white font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {project.title}
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-700/50 rounded-md text-s">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>

            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{ backgroundColor: `${project.color}30` }}
              whileHover={{
                scale: 1.05,
                backgroundColor: `${project.color}50`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}