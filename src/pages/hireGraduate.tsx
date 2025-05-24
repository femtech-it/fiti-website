const employers = ["NGOs", "Startups", "Tech Companies", "Government Organisations", "Agencies and Corporates"];
const talents = [
  "UI/UX Designer",
  "Digital Marketer",
  "Graphic Designer",
  "Web Developers",
  "Virtual Assistant",
  "Data Analysts",
  "Python Programmer",
  "Mobile Developers",
];


const opions = [
  {

    text: "Industry Relevant curriculum",
    image: "../assets/noteicon.png"
  },

  {
    text: "Tech + Workplace Ethics Traiining",
    image: "../assets/noteicon.png"
  },

  {
    text: " Community support for Continuous Learning",
    image: "../assets/noteicon.png"
  }

]


const rightoptiobnn = [
  {

    text: "Real project Experience",
    image: "../assets/noteicon.png"
  },
  {
    text: "Eacge and Coachable Talents",
    image: "../assets/noteicon.png"
  },
  {
    text: " Good Time Management",
    image: "../assets/noteicon.png"
  }
]
const HireGraduate = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center mt-[60px]">
      <div>
        <img src="/assets/graduateImg.png" alt="" />
        <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px]">HIRE OUR GRADUATES</button>
      </div>
      <div className="flex p-[40px] justify-center items-center text-center ">
        <p >At FEMTECH, we don’t just train — we nurture real-world tech talent. <br /> Our students have been equipped with hands-on skills in design, development, data, and digital tools — and <br /> they’re ready to help your business grow. <br />
          Whether you’re hiring interns, full-time team members, or remote freelancers, our alumni are trained, tested, <br /> and tech-smart.</p>
      </div>

      <main>
        <h1 className="text-black text-[40px] text-center my-[30px]">Who can hire from us ?</h1>
        {/* Top content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <img
            src="/assets/bussunes.png"
            alt="Team working"
            className="rounded-md"
          />

          {/* List */}
          <ul className="text-left space-y-4 flex flex-col  justify-center gap-[20px]">
            {employers.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-4 font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-black text-[40px] text-center my-[30px]">Talents you can find here</h3>
        <div className="h-1 w-16 bg-orange-500 mx-auto mb-6 rounded-full" />

        <section className="py-12 px-4 flex flex-col items-center bg-white gap-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-5xl w-full">
            {talents.map((talent, index) => (
              <div
                key={index}
                className={`bg-blue-900 text-white text-center font-semibold text-xl py-6 px-4 rounded-tl-[20px] rounded-br-[20px] shadow-md ${index % 2 !== 0 ? "md:translate-y-6" : ""
                  }`}
              >
                {talent}
              </div>
            ))}
          </div>
          <button className="bg-orange-500 text-white font-bold text-lg py-2 px-20 mt-12 rounded-md hover:bg-orange-600 transition ">
            Hire Now
          </button>
        </section>

        <div>

          <h3 className="text-black text-[40px] text-center my-[30px]">Why Hire from FEMTECH ?</h3>
          <div className="h-1 w-16 bg-orange-500 mx-auto mb-6 rounded-full" />
        </div>
      </main>
      <div className="flex gap-10 justify-center mt-[50px]">
        <div className="flex flex-col gap-[30px] max-w-[350px] ">
          {opions.map((option, index) => (
            <div key={index} className="flex justify-end items-center w-full max-w-md p-4  rounded-md gap-[50px]">
              <p className="text-base text-right">{option.text}</p>
              <img src={option.image} className="" />

            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[30px] justify-center item-center max-w-[300px] ">
          {rightoptiobnn.map((options, index) => (
            <div key={index} className="flex justify-end items-center w-full max-w-md p-4  rounded-md gap-[50px]">
              <img src={options.image} />
              <p className="text-base text-left">{options.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HireGraduate
