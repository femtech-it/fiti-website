// Hero redesigned with custom buttons for better styling control
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { PAGE_SEO, DEFAULT_SEO } from "../utils/seo-config";
import { getOrganizationSchema, getWebsiteSchema, getCourseSchema } from "../utils/structured-data";
import { fadeInUp, staggerContainer, pageTransition } from "../utils/animations";
import AdvantageSection from "./components/AdvantageSection"
import VisionSection from "./components/VisionSection"
import MissionSection from "./components/MissionSection"
import WhatWeDoSection from "./components/WhatWeDoSection"
import StatsSection from "./components/StatsSection"
import ReadyToElevateSection from "./components/ReadyToElevateSection"
import TestimonialsSection from "./components/TestimonialsSection"
import VideoSection from "./components/VideoSection"
import NewsletterSection from "./components/NewsletterSection"


const Homepage = () => {
  // Structured data for homepage
  const structuredData = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    // Add featured courses
    getCourseSchema({
      name: "Software Development",
      description: "Learn full-stack web development, mobile app development, and software engineering principles",
      provider: DEFAULT_SEO.organizationName,
      url: `${DEFAULT_SEO.siteUrl}/courses`
    }),
    getCourseSchema({
      name: "Data Science & Analytics",
      description: "Master data analysis, machine learning, and business intelligence tools",
      provider: DEFAULT_SEO.organizationName,
      url: `${DEFAULT_SEO.siteUrl}/courses`
    })
  ];

  return (
    <motion.main
      className="overflow-x-hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <SEO
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        ogImage={PAGE_SEO.home.ogImage}
        canonical={DEFAULT_SEO.siteUrl}
        structuredData={structuredData}
      />

      {/* Hero Section */}

      <section className="relative min-h-[90vh] md:min-h-screen bg-[url(/assets/fiti_bg.jpg)] bg-cover bg-center flex flex-col pt-32 pb-12 lg:pt-0 lg:justify-center overflow-hidden">

        <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 flex-grow py-12 lg:py-20">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-[55%] flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-white text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] md:leading-[1.05]"
              variants={fadeInUp}
            >
              Empowering you with the <span className="text-[#F67809]">Skills </span>
              to Thrive in <br className="hidden md:block" />
              <span className="text-[#F67809]">Tech</span>
            </motion.h1>
            <motion.p
              className="text-white text-lg md:text-xl lg:text-2xl max-w-xl opacity-90 leading-relaxed font-medium"
              variants={fadeInUp}
            >
              Providing hands-on tech training that equips you with the skills to excel in today's digital world.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 pt-4 md:pt-6"
              variants={fadeInUp}
            >
              <Link
                to="/registration"
                className="bg-white text-[#0010A3] hover:bg-gray-100 h-14 md:h-16 px-8 md:px-16 text-xl md:text-2xl font-black rounded-md border-none cursor-pointer shadow-2xl transition-transform hover:scale-105 flex items-center justify-center no-underline"
              >
                Enroll
              </Link>
              <button
                className="bg-[#F67809] text-white hover:bg-[#E56708] h-14 md:h-16 px-6 md:px-12 text-xl md:text-2xl font-black rounded-md cursor-pointer border-none shadow-2xl transition-transform hover:scale-105"
              >
                Chat with an Advisor
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[45%] relative h-[600px] md:h-[500px] lg:h-[650px] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src="/assets/heroImg.png" alt="FITI Student Learning Tech Skills" className="w-[400px] max-w-[400px] md:max-w-[500px] object-contain " />
          </motion.div>
        </div>

      </section>

      {/* New Sections */}
      <AdvantageSection />
      <VisionSection />
      <MissionSection />
      <WhatWeDoSection />
      <StatsSection />
      <ReadyToElevateSection />
      <TestimonialsSection />
      <VideoSection />
      <NewsletterSection />
    </motion.main>
  )
}

export default Homepage