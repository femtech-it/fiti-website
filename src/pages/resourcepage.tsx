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
        " In-depth feedback and career guidance",
      ],
      idealFor: "Business owners, job seekers, or those preparing for a specific role.",
      availability: "Flexible scheduling (weekdays & weekends).",
    },
    {
      icon: "/assets/personr.png",
      title: "Crash Training Program ",
      subtitle: "(Intensive Learning)",
      duration:'Duration: 2-4 weeks',
      location: " FEMTECH Training Institute (Physical) or Online",
      bestFor: "Fast-track learners who want to acquire skills quickly.",
      whatToExpect: [
        "Intensive, high-impact learning in a short period",
        "Hands-on projects and real-world case studies",
        "Expert-led workshops and live coding/design sessions",
        " Dedicated support for fast learning and skill application",
        " Certification upon completion",
      ],
      idealFor: "Job seekers, career changers, and professionals looking for rapid upskilling.",
      availability: " Scheduled crash courses throughout the year.",
    },
    {
      icon: "/assets/peoplelogo.png",
      title: "Corporate Training",
      subtitle: "(For Companies & Teams)",
      location: " FEMTECH Training Facility or On-Site at the Company",
      bestFor: "Businesses and organizations looking to train their employees.",
      whatToExpect: [
        "Customized training programs tailored to company needs",
        " On-site or online delivery based on company preference",
        "Hands-on projects relevant to industry trends",
        " Team-based collaboration and practical exercises",
        " Post-training support and performance assessment",
      ],
      idealFor: "Companies looking to upskill their workforce in tech, cybersecurity, digital marketing, or IT project management.",
      availability: "Custom scheduling based on company needs..",
    },
  ];



  return (
    <section>
      <div className="min-h-screen flex flex-col items-center justify-center bg-no-repeat mt-[80px]">
        <img src="/assets/resoureceimg.png" alt="" />
        <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px]">RESOURCES</button>
      </div>
      <div>
        <h1 className="flex items-center justify-center mt-[20px] text-[30px]">Downloadable Study guide</h1>
        <div className="grid grid-cols-2  max-w-5xl mx-auto mt-[50px] gap-[50px] place-items-center justify-items-center">
          {DisplayCourses.map((items, index) => (
            <div key={index} className="grid place-items-center justify-items-center gap-[20px]">
              <img src={items.img} alt="" className="" />
              <p className=".font-bold text-[30px]">{items.title}</p>
              <p className=".font-bold text-[20px]">{items.instructor},{items.date}</p>
              <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 flex items-center justify-center">Download PDF</button>
            </div>
          ))}
        </div>
        <div>
          <h1 className="flex items-center justify-center  text-[40px] mt-[80px] font-bold ">FAQs</h1>
          <p className="flex items-center justify-center my-[30px]">Find answers to all your questions about FEMTECH Training Institute.</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-18 py-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {Array.from({ length: 14 }).map((_, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-[43px] h-[46px] bg-gray-400 rounded-sm shrink-0"></div>

              <div className="">
                <h2 className="font-semibold text-lg">{DisplayFaqs.Heading}</h2>
                <p className="text-gray-700 text-sm">{DisplayFaqs.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="flex items-center justify-center mt-[20px] font-bold text-[30px]">Learning and Delivery Method</h1>
        <p className="flex items-center justify-center my-[30px] mx-[50px] text-left ">At FEMTECH Training Institute, we understand that everyone learns differently. That’s why we offer multiple learning methods designed to fit your schedule, skill level, and career goals. Whether you prefer live interactive sessions, self-paced learning, or hands-on project-based training, our flexible delivery options ensure that you get the best learning experience.
          Explore our diverse training methods and find the one that works best for you!</p>

        <div>

        </div>
        <div className="grid md:grid-cols-2 gap-8 px-40 py-10 bg-[#FEEEDA]">
  {trainingPrograms.map((program, index) => {
    const isLast = index === trainingPrograms.length - 1;
    const shouldCenter = trainingPrograms.length % 2 === 1 && isLast;

    return (
      <div
        key={index}
        className={`shadow-md p-6 ${shouldCenter ? "md:col-span-2 md:justify-self-center md:w-1/2" : ""}`}
      >
        {/* Header Card */}
        <div className="bg-[#0000A3] text-white rounded-[20px] px-4 py-5 mb-4">
          <div className="flex justify-center mb-3">
            <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center p-[5px]">
              <img src={program.icon} alt="" className="w-full h-full object-cover "/>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center">
            {program.title}x
            <br />
            <span className="text-sm font-normal">{program.subtitle}</span>
          </h3>
        </div>

        {/* Details Section */}
        <div className="text-sm space-y-2 text-gray-800">
          <p>
            <strong>Location:</strong> {program.location}
            <br />
            {program.duration}
          </p>
          <p>
            <strong>Best for:</strong> {program.bestFor}
          </p>
          <p>
            <strong>What to Expect:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            {program.whatToExpect.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>
            <strong>Ideal for:</strong> {program.idealFor}
          </p>
          <p>
            <strong>Availability:</strong> {program.availability}
          </p>
        </div>

        {/* Button */}
        <div className="text-center mt-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md mt-[50px]">
            Contact Us to Learn More
          </button>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </section>

  )
}

export default Resourcepage
