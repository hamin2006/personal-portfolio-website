import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Briefcase, GraduationCap, ExternalLink } from "lucide-react"
import Footer from "../Components/Footer"

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState("experience");
  useEffect(() => {
    document.title = "Harsh Amin | Experience";
  }, []);
  
  return (
    <div className = "flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 pt-16 px-4 sm:px-6">
      <div className="min-h-screen flex items-center justify-center ">
        <div className="max-w-7xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Journey
          </motion.h1>

          <motion.p
            className="text-lg text-center mb-12 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore my professional experience and educational background
          </motion.p>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
              <button
                onClick={() => {document.title = "Harsh Amin | Experience"; setActiveTab("experience");}}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === "experience"
                    ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Experience
              </button>
              <button
                onClick={() => {document.title = "Harsh Amin | Education"; setActiveTab("education");}}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === "education"
                    ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                }`}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Education
              </button>
            </div>
          </div>

          {activeTab === "experience" ? <ExperienceTimeline /> : <EducationTimeline />}
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      title: "Incoming Software Developer Intern",
      company: "UBC X AWS Cloud Innovation Center",
      logo: "/cic.png",
      period: "2025 May - 2025 Dec",
      description:
        "Excited to be working on projects revolved around AWS and Artificial Intelligence.",
      skills: ["AWS", "AI"],
      link: "https://cic.ubc.ca/",
    },
    {
      id: 2,
      title: "Software Developer",
      company: "UBC Launch Pad",
      logo: "/launchpad.jpeg",
      period: "2024 Sep - Present",
      description:
        "As a software developer at UBC Launch Pad, I collaborate with a team in an agile environment to develop the Forum AI project. My contributions include designing parts of the Retrieval Augmented Generation model, developing FastAPI endpoints, setting up a PostgreSQL database with migration scripts, and implementing Selenium-based automation.",
      skills: ["React", "TypeScript", "TailwindCSS", "FastAPI", "PostgreSQL", "RAG"],
      link: "https://www.ubclaunchpad.com/",
    },
    {
      id: 3,
      title: "Computer Science TA",
      company: "Henry Wise Wood High School",
      logo: "/hww.jpg",
      period: "Jan 2023 - Jun 2023",
      description:
        "As a Computer Science TA, I assessed student submissions by implementing JUnit test cases and explained complex topics like Linked Lists, OOP, and Sorting algorithms through in-class presentations. I also designed assignments on UI development and OOP, enhancing both my communication skills and students' programming abilities.",
      skills: ["Communication", "Leadership", "JUnit", "UI Development"],
      
    },
    {
      id: 4,
      title: "Math Instructor",
      company: "Mathnasium",
      logo: "/mathnasium.jpeg",
      period: "Sep 2022 - May 2023",
      description:
        "As a math instructor, I taught high school math (grades 9-12) using the Mathnasium Learning Method, improving my communication and leadership skills through student interactions and coordination with fellow instructors.",
      skills: ["Communication", "Leadership", "Teamwork", "Problem Solving"],
      link: "https://www.mathnasium.com/ca/"
    },
  ]

  return (
    <div className="relative w-full">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

      {/* Experience cards */}
      <div className="relative">
        {experiences.map((experience, index) => (
          <TimelineCard
            key={experience.id}
            data={experience}
            index={index}
            isLeft={index % 2 === 0}
            icon={<Briefcase className="w-5 h-5" />}
          />
        ))}
      </div>
    </div>
  )
}

function EducationTimeline() {
  const education = [
    {
      id: 1,
      degree: "BSc in Computer Science",
      school: "University of British Columbia",
      logo: "/ubc.png",
      period: "2023 - 2027",
      description:"<b>GPA:</b> 89% <br/> <b>Awards:</b> Trek Academic Excellence Scholarship <br/> <b>Extracurriculars:</b> UBC Launch Pad Design Team, Intramural Basketball, Weight Lifting and Entrepreneurship Club",
      courses: ["Data Structures", "Web Development", "Software Engineering", "Discrete Mathematics", "Computer Systems", "Machine Learning"],
      link: "https://www.ubc.ca/",
    },
    {
      id: 2,
      degree: "Certications",
      school: "Udemy",
      logo: "/udemy.png",
      period: "May 2024 - Aug 2024",
      description:
        "Completed two Udemy courses. One on Full Stack Web Development, learning how to build responsive websites and web applications. And another on Machine Learning, diving into the world of AI and data science using extensive frameworks and libraries in Python and R.",
      courses: ["The Complete 2024 Web Development Bootcamp", "Machine Learning A-Z"],
      link: "#",
    },
  ]

  return (
    <div className="relative w-full">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600" />

      {/* Education cards */}
      <div className="relative">
        {education.map((edu, index) => (
          <TimelineCard
            key={edu.id}
            data={{
              title: edu.school,
              company: edu.degree,
              logo: edu.logo,
              period: edu.period,
              description: edu.description,
              courses: edu.courses,
              link: edu.link,
            }}
            index={index}
            isLeft={index % 2 === 0}
            icon={<GraduationCap className="w-5 h-5" />}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineCard({ data, index, isLeft, icon, type }) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const x = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [isLeft ? -50 : 50, 0, 0, isLeft ? -50 : 50])

  return (
    <div
      ref={cardRef}
      className={`relative mb-24 flex gap-x-[5rem] items-end md:items-center`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
            isLeft
              ? "bg-blue-100 border-blue-500 dark:bg-blue-900 dark:border-blue-400"
              : "bg-purple-100 border-purple-500 dark:bg-purple-900 dark:border-purple-400"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1 + index * 0.1,
          }}
        >
          {icon}
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        className={`relative w-full md:w-5/12 ${isLeft ? "md:mr-auto" : "md:ml-auto"} `}
        style={{ opacity, x }}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{data.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">{data.company}</span>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div className="w-16 h-16 rounded-md overflow-hidden bg-slate-100 dark:bg-slate-700 p-2 flex items-center justify-center">
                  <img
                    src={data.logo || "/placeholder.svg"}
                    alt={`${data.company} logo`}
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{data.period}</span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-4" dangerouslySetInnerHTML={{ "__html": data.description }}></p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
                {data.skills ? "Skills & Technologies" : "Courses"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.skills ? data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      isLeft
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    }`}
                  >
                    {skill}
                  </span>
                )) : 
                data.courses.map((skill, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      isLeft
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={data.link}
              className={`inline-flex items-center text-sm font-medium ${
                isLeft
                  ? "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  : "text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
              }`}
            >
              Learn more <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          <div
            className={`h-1.5 ${
              isLeft
                ? "bg-gradient-to-r from-blue-300 to-blue-600 dark:from-blue-600 dark:to-blue-400"
                : "bg-gradient-to-r from-purple-300 to-purple-600 dark:from-purple-600 dark:to-purple-400"
            }`}
          />
        </div>
      </motion.div>
    </div>
  )
}

