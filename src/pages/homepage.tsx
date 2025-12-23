// Hero redesigned with custom buttons for better styling control
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
  return (
    <main className="overflow-x-hidden">

      {/* Hero Section */}

      <section className="relative min-h-[90vh] md:min-h-screen bg-[url(/assets/fiti_bg.jpg)] bg-cover bg-center flex flex-col pt-32 pb-12 lg:pt-0 lg:justify-center overflow-hidden">

        <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 flex-grow py-12 lg:py-20">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] md:leading-[1.05]">
              Empowering you with the <span className="text-[#F67809]">Skills </span>
              to Thrive in <br className="hidden md:block" />
              <span className="text-[#F67809]">Tech</span>
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl max-w-xl opacity-90 leading-relaxed font-medium">
              Providing hands-on tech training that equips you with the skills to excel in today's digital world.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 pt-4 md:pt-6">
              <button
                className="bg-white text-[#0010A3] hover:bg-gray-100 h-14 md:h-16 px-8 md:px-16 text-xl md:text-2xl font-black rounded-md border-none cursor-pointer shadow-2xl transition-transform hover:scale-105"
              >
                Enroll
              </button>
              <button
                className="bg-[#F67809] text-white hover:bg-[#E56708] h-14 md:h-16 px-6 md:px-12 text-xl md:text-2xl font-black rounded-md cursor-pointer border-none shadow-2xl transition-transform hover:scale-105"
              >
                Chat with an Advisor
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[45%] relative h-[300px] md:h-[500px] lg:h-[650px] flex items-center justify-center">
            <img src="/assets/heroImg.png" alt="Hero" className="w-full max-w-[400px] md:max-w-[500px] object-contain" />
          </div>
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
    </main>
  )
}

export default Homepage