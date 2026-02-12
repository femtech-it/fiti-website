import { motion } from "framer-motion";
import { pageTransition, staggerContainer, fadeInUp } from "../utils/animations";
import SEO from "../components/SEO";
import { PAGE_SEO, DEFAULT_SEO } from "../utils/seo-config";

const StudentProject = () => {

  const studentProjects = [
    {
      title: 'SavedUp - A Micro-Investment app for Students.',
      description: 'A UI/UX case study on financial planning for students',
      author: 'Tiaraoluwa Olowopo',
      image: '/assets/student1.png',
    },
    {
      title: 'SavedUp - A Micro-Investment app for Students.',
      description: 'A UI/UX case study on financial planning for students',
      author: 'Tiaraoluwa Olowopo',
      image: '/assets/student2.png',
    },
    {
      title: 'FitTrack - A Health and Fitness App.',
      description: 'UX case study on fitness tracking for beginners',
      author: 'Aisha Lawal',
      image: '/assets/student3.png',
    },
    {
      title: 'AgroLink - A Platform for Farmers.',
      description: 'Designing for rural engagement and supply chains',
      author: 'Samuel Ojo',
      image: '/assets/student4.png',
    },
    {
      title: 'ShopSmart - Smart Grocery Planning.',
      description: 'Helping users budget and manage groceries efficiently',
      author: 'Grace Eze',
      image: '/assets/student5.png',
    },
    {
      title: 'CampusConnect - Social Networking for Students.',
      description: 'UX case for improving campus community engagement',
      author: 'Emeka Nwosu',
      image: '/assets/student6.png',
    },
  ];

  return (
    <motion.section
      className="bg-gray-50 pt-24 pb-20"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <SEO
        title={PAGE_SEO.studentProjects.title}
        description={PAGE_SEO.studentProjects.description}
        keywords={PAGE_SEO.studentProjects.keywords}
        canonical={`${DEFAULT_SEO.siteUrl}/student-projects`}
        ogImage={PAGE_SEO.studentProjects.ogImage}
      />
      <div className="relative mb-16">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img src="/assets/studentimg.png" alt="Student Projects Hero" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center -mt-6 md:-mt-10">
          <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
            STUDENTS’ PROJECT
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center mb-24">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
          Showcasing innovation, creativity, and tech skills from our talented students!
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-gray-800 mt-8">Latest Students Projects</h1>
        <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mt-4" />
      </div>

      <motion.div
        className="container mx-auto px-6 max-w-6xl space-y-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {studentProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-12`}
          >
            <div className="w-full md:w-1/2 group">
              <div className="overflow-hidden rounded-[40px] shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">{project.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {project.author.charAt(0)}
                </div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">By: {project.author}</p>
              </div>

              <div className="pt-4">
                <button className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-10 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default StudentProject
