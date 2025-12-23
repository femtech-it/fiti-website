const Resourcepage = () => {
  const DisplayCourses = [
    {
      img: "/assets/instructor_img.png",
      title: "Beginners Guide to UI/UX Design",
      instructor: "By : J.D Tanwa",
      date: "2022"
    },
    {
      img: "/assets/instructor_img.png",
      title: "Beginners Guide to UI/UX Design",
      instructor: "By : J.D Tanwa",
      date: "2022"
    },
    {
      img: "/assets/instructor_img.png",
      title: "Beginners Guide to UI/UX Design",
      instructor: "By : J.D Tanwa",
      date: "2022"
    },
    {
      img: "/assets/instructor_img.png",
      title: "Beginners Guide to UI/UX Design",
      instructor: "By : J.D Tanwa",
      date: "2022"
    },
  ]

  const DisplayFaqs = {
    Heading: 'What is FEMTECH Training Institute?',
    text: 'FEMTECH is a technology training institute that empowers individuals with digital skills in areas like UI/UX design, software development, data science'
  }


  const trainingPrograms = [
    {
      icon: "/assets/person-icons.png",
      title: "Physical Classroom Training",
      subtitle: "(In-Person Learning)",
      location: "FEMTECH Training Institute, Ilorin",
      bestFor: "Hands-on learners who prefer face-to-face interaction with instructors and classmates.",
      whatToExpect: [
        "Instructor-led, structured classes",
        "Access to fully equipped computer labs",
        "Group discussions and peer collaboration",
        "Real-time feedback and guidance",
        "Printed learning materials and workbooks",
      ],
      idealFor: "Beginners & intermediate learners who prefer direct interaction and practical learning.",
      availability: "Weekday & weekend sessions available",
    },
    {
      icon: "/assets/laptop_logo.png",
      title: "Online Live Training",
      subtitle: "(Virtual Learning)",
      location: "Online (Google Meet)",
      bestFor: "Learners who want flexible learning from anywhere in the world.",
      whatToExpect: [
        "Live instructor-led sessions",
        "Interactive Q&A and real-time collaboration",
        "Digital learning resources & recorded sessions",
        "Online assignments and group projects",
        "Access to FEMTECH’s online student portal",
      ],
      idealFor: "Working professionals, remote learners, and students with busy schedules",
      availability: "Evening & weekend classes available",
    },
    {
      icon: "/assets/chat_logo.png",
      title: "One-on-One Private Class",
      subtitle: "(Personalized Learning)",
      location: "Physical or Virtual",
      bestFor: "Individuals who want personalized learning.",
      whatToExpect: [
        "Personalized curriculum based on your learning goals",
        "Direct mentorship from an expert instructor",
        "Hands-on projects tailored to your needs",
        "Flexible class scheduling",
        "In-depth feedback and career guidance",
      ],
      idealFor: "Business owners, job seekers, or those preparing for a specific role.",
      availability: "Flexible scheduling (weekdays & weekends).",
    },
    {
      icon: "/assets/personr.png",
      title: "Crash Training Program",
      subtitle: "(Intensive Learning)",
      duration: 'Duration: 2-4 weeks',
      location: "FEMTECH Training Institute (Physical) or Online",
      bestFor: "Fast-track learners who want to acquire skills quickly.",
      whatToExpect: [
        "Intensive, high-impact learning in a short period",
        "Hands-on projects and real-world case studies",
        "Expert-led workshops and live coding/design sessions",
        "Dedicated support for fast learning and skill application",
        "Certification upon completion",
      ],
      idealFor: "Job seekers, career changers, and professionals looking for rapid upskilling.",
      availability: "Scheduled crash courses throughout the year.",
    },
    {
      icon: "/assets/peoplelogo.png",
      title: "Corporate Training",
      subtitle: "(For Companies & Teams)",
      location: "FEMTECH Training Facility or On-Site at the Company",
      bestFor: "Businesses and organizations looking to train their employees.",
      whatToExpect: [
        "Customized training programs tailored to company needs",
        "On-site or online delivery based on company preference",
        "Hands-on projects relevant to industry trends",
        "Team-based collaboration and practical exercises",
        "Post-training support and performance assessment",
      ],
      idealFor: "Companies looking to upskill their workforce in tech, cybersecurity, digital marketing, or IT project management.",
      availability: "Custom scheduling based on company needs.",
    },
  ];



  return (
    <section className="pt-24 bg-gray-50 pb-20">
      <div className="relative mb-16">
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden">
          <img src="/assets/resoureceimg.png" alt="Resources Hero" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center -mt-6 md:-mt-10">
          <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
            RESOURCES
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mt-12 mb-12">Downloadable Study Guide</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24 max-w-6xl mx-auto">
          {DisplayCourses.map((items, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 group hover:shadow-2xl transition-all">
              <div className="w-full h-64 bg-gray-100 rounded-3xl mb-8 overflow-hidden">
                <img src={items.img} alt={items.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h2 className="font-bold text-2xl md:text-3xl text-center mb-2">{items.title}</h2>
              <p className="text-gray-500 text-lg mb-8">{items.instructor}, {items.date}</p>
              <button className="bg-secondary text-white py-4 px-10 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg">
                Download PDF
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[50px] p-8 md:p-16 shadow-2xl mb-24 border border-gray-100">
          <h1 className="text-4xl md:text-6xl font-black text-center text-gray-800 mb-6">FAQs</h1>
          <p className="text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-16">
            Find answers to all your questions about FEMTECH Training Institute.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {Array.from({ length: 14 }).map((_, index) => (
              <div key={index} className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl shrink-0 flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all">
                  ?
                </div>
                <div>
                  <h2 className="font-bold text-xl text-gray-800 mb-2">{DisplayFaqs.Heading}</h2>
                  <p className="text-gray-600 leading-relaxed">{DisplayFaqs.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-gray-800 mb-8">Learning and Delivery Method</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-5xl mx-auto leading-relaxed px-4">
            At FEMTECH Training Institute, we understand that everyone learns differently. That’s why we offer multiple learning methods designed to fit your schedule, skill level, and career goals. Whether you prefer live interactive sessions, self-paced learning, or hands-on project-based training, our flexible delivery options ensure that you get the best learning experience.
            Explore our diverse training methods and find the one that works best for you!
          </p>
        </div>
      </div>

      <div className="bg-[#FEEEDA] py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-[40px] p-8 shadow-xl flex flex-col h-full border border-orange-100 group hover:shadow-2xl transition-all"
              >
                {/* Header Card */}
                <div className="bg-[#0000A3] text-white rounded-3xl p-6 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8"></div>
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-3 shadow-lg">
                      <img src={program.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                    <p className="text-sm opacity-80">{program.subtitle}</p>
                  </div>
                </div>

                {/* Details Section */}
                <div className="space-y-6 flex-grow text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg shrink-0">📍</div>
                    <p><strong>Location:</strong> {program.location}</p>
                  </div>
                  {program.duration && (
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg shrink-0">⏳</div>
                      <p><strong>Duration:</strong> {program.duration}</p>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg shrink-0">🎯</div>
                    <p><strong>Best for:</strong> {program.bestFor}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg shrink-0">📝</div>
                      <p><strong>What to Expect:</strong></p>
                    </div>
                    <ul className="space-y-3 pl-11">
                      {program.whatToExpect.map((item, idx) => (
                        <li key={idx} className="relative before:content-['•'] before:absolute before:-left-4 before:text-primary before:font-black">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-10">
                  <button className="w-full bg-secondary hover:bg-opacity-90 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transition-all hover:translate-y-[-2px]">
                    Contact Us to Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resourcepage
