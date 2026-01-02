import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { PAGE_SEO, DEFAULT_SEO } from "../utils/seo-config";
import { getOrganizationSchema, getLocalBusinessSchema } from "../utils/structured-data";
import { pageTransition, fadeInUp, staggerContainer, staggerItem, viewportAnimation, defaultViewport } from "../utils/animations";
import Team from "./components/team"

const AboutUsPage = () => {
  // Structured data for about page
  const structuredData = [
    getOrganizationSchema(),
    getLocalBusinessSchema()
  ];

  const opions = [
    {
      text: "Free Training Kit",
      image: "../assets/noteicon.png"
    },
    {
      text: "State-of-the-Art Infrastructure with Smart Classrooms",
      image: "../assets/noteicon.png"
    },
    {
      text: "Free Internet Access",
      image: "../assets/noteicon.png"
    },
    {
      text: "Flexible Schedule",
      image: "../assets/noteicon.png"
    }
  ]

  const rightoptiobnn = [
    {
      text: "Government-Approved Certification",
      image: "../assets/noteicon.png"
    },
    {
      text: "Accredited Training Programs",
      image: "../assets/noteicon.png"
    },
    {
      text: "Conducive Learning Environment",
      image: "../assets/noteicon.png"
    },
    {
      text: "Experienced and Seasoned Instructors",
      image: "../assets/noteicon.png"
    }
  ]

  const partnerImg = [
    { img: "../assets/actd-icons.png" },
    { img: "../assets/seedingafrica.png" },
    { img: "../assets/comptialogo.png" },
    { img: "../assets/wtec.png" },
    { img: "../assets/abubakar1.png" },
    { img: "../assets/academy.png" },
  ]

  return (
    <motion.section
      className="min-h-screen relative flex flex-col pt-24"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <SEO
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        keywords={PAGE_SEO.about.keywords}
        ogImage={PAGE_SEO.about.ogImage}
        canonical={`${DEFAULT_SEO.siteUrl}/about`}
        structuredData={structuredData}
      />

      <div className="w-full h-auto">
        <img src="/assets/aboutuspic.png" className="w-full h-auto object-cover" alt="FITI Training Institute - About Us" />
      </div>

      <div className="flex justify-center -mt-6 md:-mt-10 mb-8 px-6">
        <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-sans text-xl md:text-3xl lg:text-4xl font-bold shadow-lg w-full max-w-2xl">
          ABOUT US
        </button>
      </div>

      <div className="px-6 md:px-12 lg:px-20 flex flex-col gap-6 text-gray-700">
        <p className="text-lg leading-relaxed">
          FEMTECH Information Technology Training Centre (FITI) is a subsidiary of FEMTECH Information Technology Limited, a one-stop IT solutions company incorporated in 2002 with the Corporate Affairs Commission (CAC). The company specializes in the sales, repair, and maintenance of gadgets, renewable energy solutions, ICT training, and consultation.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          At FITI, we are dedicated to bridging the digital skills gap in Nigeria and Africa. We offer a wide range of training programs in various fields, including software development, data science, digital marketing, and more. Our courses are designed to be practical and hands-on, ensuring that our students gain real-world experience and knowledge that can be applied immediately in their careers.
          FITI was established in 2012 with the core mission of providing effective ICT training for career development. We are committed to equipping youths, professionals, business owners, and corps members with digital skills that enhance their career prospects, improve business efficiency, and give them a competitive edge in the evolving digital world.
          Beyond technical skills, FITI also provides mentorship and soft skills training, preparing students for the realities of the digital workforce, including remote work, entrepreneurship, and freelancing.
        </p>
      </div>

      <main className="px-6 md:px-12 lg:px-20 mt-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose Us.</h1>
        <p className="text-center md:text-justify max-w-4xl mx-auto mb-12">
          At FEMTECH Training Institute, we are committed to providing a top-notch learning experience with industry-relevant skills and a supportive environment. Our programs are designed to equip you with practical knowledge and hands-on training, ensuring you stay ahead in the tech industry. Here's what sets us apart:
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {opions.map((option, index) => (
              <div key={index} className="flex justify-between md:justify-end items-center p-4 bg-gray-50 rounded-xl gap-4 md:gap-8 group hover:bg-white hover:shadow-md transition-all">
                <p className="text-base md:text-right font-medium">{option.text}</p>
                <img src={option.image} className="w-8 h-8 object-contain" alt="FITI Benefit Icon" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {rightoptiobnn.map((options, index) => (
              <div key={index} className="flex justify-between md:justify-start items-center p-4 bg-gray-50 rounded-xl gap-4 md:gap-8 group hover:bg-white hover:shadow-md transition-all">
                <img src={options.image} className="w-8 h-8 object-contain order-2 md:order-1" alt="FITI Benefit Icon" />
                <p className="text-base text-left font-medium order-1 md:order-2">{options.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="px-6 md:px-12 lg:px-20 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Partners</h1>
        <p className="text-center md:text-justify max-w-4xl mx-auto mb-10">
          FITI collaborates with industry leaders, corporate organizations, government agencies, and NGOs to expand access to quality ICT training. Our key partners include:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
          {partnerImg.map((ImG, index) => (
            <div key={index} className="w-full max-w-[120px] filter grayscale hover:grayscale-0 transition-all duration-300">
              <img src={ImG.img} alt="FITI Training Partner Logo" className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* <Team /> */}

      <div className="bg-[image:url(/assets/rect.png)] mt-20 bg-no-repeat bg-cover py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Career at FEMTECH Training</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <p className="text-lg leading-relaxed mb-8">
              Join our team of innovators and educators shaping the future of tech! At FEMTECH Training, we are always looking for passionate professionals eager to inspire and equip the next generation with industry-relevant skills.
            </p>
            <div className="flex flex-col gap-6">
              {[
                "Dynamic and collaborative work environment",
                "Opportunities for Professional Growth",
                "Competitive benefits and flexible work arrangement"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <img src="../assets/noteicon.png" alt="Career Benefit Icon" className="w-6 h-6" />
                  <p className="font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src="../assets/woman.png" alt="Career Opportunities at FITI" className="w-full max-w-md h-auto object-contain" />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-secondary px-12 py-4 rounded-xl text-white font-bold text-lg shadow-xl hover:scale-105 transition-transform">
            See Open Roles
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutUsPage
