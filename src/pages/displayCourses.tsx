import { FaClock, FaCertificate } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";





const displayCourses = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-no-repeat mt-[70px] gap-[50px] relative mt-[100px] p-[50px]">
      <div className="flex justify-center items-start gap ">
        <div className="flex flex-col justify-center items-start gap-5 ">
          <p className="text-primary text-sm ">Explore Our Courses / Courses Overview</p>
          <h1 className="text-[40px] font-bold">Web Design and Application Development
            (Laravel)</h1>
          <p className="text-[20px] text-black max-w-[623px]">
            Develop your web design and application development
            skills with Laravel, and advance your expertise in building
            modern web solutions.
          </p>
          <div className="   rounded-xl shadow-md  max-w [665px] max-h-[487px] ">
            <img src="/assets/laptop.png" alt="" />



            <div className="flex gap-12 p-5 text-sm text-black">
              {/* Duration */}
              <div className="flex flex-col items-center gap-1 justify-start border-r-2 pr-6">
                <div className="flex justify-start items-center gap-2">
                  <MdOutlineDateRange className="text-lg mt-0.5" />
                  <p className="text-xs  font-light">Duration</p>
                </div>
                <p className="text-sm font-semibold">12 Weeks</p>
              </div>

              {/* Days/Week */}
              <div className="flex flex-col items-center gap-1 justify-start border-r-2 pr-6">
                <div className="flex justify-start items-center gap-2">
                  <FaClock className="text-lg mt-0.5" />
                  <p className="text-xs font-light">3 Days/Week</p>
                </div>
                <p className="text-sm font-semibold">6 hours per week</p>
              </div>

              {/* Class Type */}
              <div className="flex flex-col items-center gap-1 justify-start border-r-2 pr-6">
                <div className="flex justify-start items-center gap-2">
                  <FaChalkboardTeacher className="text-lg mt-0.5" />
                  <p className="text-xs font-light">Classes</p>
                </div>
                <p className="text-sm font-semibold">Virtual and Physical</p>
              </div>

              {/* Fee */}
              <div className="flex flex-col items-center gap-1 justify-start ">
                <div className="flex justify-start items-center gap-2">
                  <IoPricetagsOutline className="text-lg mt-0.5" />
                  <p className="text-xs font-light">Fee</p>
                </div>
                <p className="text-sm font-semibold">₦ 150,000</p>
              </div>
            </div>
          </div>

          <div className=" mt-[70px] flex flex-col">
            <div className="flex item-center justify-center mb-[-25px]  z-5">
              <button className="bg-primary py-[8px] px-[50px]  rounded-tl-[20px] rounded-br-[20px] text-white font-extrabold text-[20px]">Course Description</button>
            </div>
            <div className="max-w-xl bg-gradient-to-r from-[#D7D6EE] to-[#FAE3D1]  p-12 rounded-xl shadow-md text-gray-800">
              {/* Description */}
              <p className="text-base leading-7 mb-4">
                Learn to design and build professional websites and dynamic web
                applications using HTML, CSS, JavaScript, PHP, and Laravel. This
                hands-on course takes you from the basics to full-stack development,
                covering responsive design, database integration, authentication, and
                real-world project deployment. Ideal for beginners and aspiring
                developers looking to build a solid tech portfolio and job-ready skills.
              </p>

              {/* Outline */}
              <h3 className="text-blue-700 font-bold mb-2">COURSE OUTLINE</h3>
              <ul className="space-y-1 text-sm leading-6">
                <li><span className="font-bold">Week 1 –</span> Introduction to Laravel framework</li>
                <li><span className="font-bold">Week 2 –</span> Laravel routing</li>
                <li><span className="font-bold">Week 3 –</span> Laravel middleware</li>
                <li><span className="font-bold">Week 4 –</span> Laravel controllers</li>
                <li><span className="font-bold">Week 5 –</span> Frontend</li>
                <li><span className="font-bold">Week 6 –</span> Models</li>
                <li><span className="font-bold">Week 7 –</span> User Authentication</li>
                <li><span className="font-bold">Week 8 –</span> Eloquent ORM</li>
                <li><span className="font-bold">Week 9 –</span> Eloquent relationships</li>
                <li><span className="font-bold">Week 10 –</span> Laravel Mail</li>
                <li><span className="font-bold">Week 11 –</span> Deploying Laravel app to Heroku</li>
                <li><span className="font-bold">Week 12 –</span> Capstone Project and End of Training Assessment</li>
              </ul>
            </div>
          </div>

          <div className="flex item-center justify-center flex-col gap-5 p-4">
            <div className="flex justify-center item-center">
              <button className="bg-primary py-[8px] px-[50px] rounded-tl-[20px] rounded-br-[20px] text-white font-extrabold text-[20px]">Who will you learn with?</button>
            </div>
            <div className="bg-[#FAE3D1] flex flex-col item-center justify-center text-center rounded-lg gap-[20px] p-[40px] w-[517px]">
              <div className=" rounded-full flex item-center justify-center">
                <img src="/assets/faruk.png" alt="" />
              </div>
              <div className="bg-primary  text-white rounded-lg px-4 py-2">
                <h1 className="text-[20px] font-semibold">AINA FARUK</h1>
                <p> With 8 years of experience in UI/UX Design, Faruk specializes in Designs. As a dedicated mentor at FEMTECH Training, He equips students with hands-on, industry-relevant skills.</p>
              </div>
            </div>
          </div>
        </div>



        <div className="sticky top-[100px]">
          {/* left card for courses */}
          <div className="w-[459px] bg-white rounded-xl shadow-lg p-6 text-black font-sans ">
            {/* Title */}
            <h2 className="text-2xl font-semibold leading-tight">
              Web Design and Application Development (Laravel)
            </h2>

            {/* Recommendation */}
            <p className="text-sm text-primary mt-4 font-medium">
              To ensure you get the most out of this course, we recommend the following before enrolling:
            </p>
            <ul className="text-primary text-sm list-disc ml-5 mt-2 space-y-1">
              <li>8GB RAM (16GB recommended)</li>
              <li>SSD storage (for faster performance)</li>
              <li>Up-to-date operating system and browser</li>
            </ul>

            {/* Course Info Icons */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MdOutlineDateRange className="text-lg" />
                <span>12 Weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-lg" />
                <span>6 hours per week</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCertificate className="text-lg" />
                <span>Certificate of Completion</span>
              </div>
              <div className="flex items-center gap-2">
                <PiStudent className="text-lg" />
                <span>₦ 150,000</span>
              </div>
              <div className="flex items-center gap-2">
                <BsGraphUpArrow className="text-lg" />
                <span>Beginner</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 space-y-2">
              <button className="w-full bg-primary text-white py-2 rounded-full font-semibold text-sm hover:bg-blue-800 transition">
                Download Curriculum
              </button>
              <p className="text-sm text-black text-center font-semibold">
                <span className="text-blue-700 underline cursor-pointer">ENROLL NOW</span> to join this course
              </p>
            </div>
          </div>
        </div>
      </div>



      <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[50px]">Learning Outcome</button>
      <div className="flex justify-center  gap-[50px] p-7x ">

        <div className="w-[700px] text-[20px] p-2">
          <p>By the end of this course, you’ll be able to:</p>

          <ol className="list-disc space-y-1 text-sm leading- text-[20px]">

            <li className="list-decimal "> Understand the core principles of web design and how
              they apply to modern applications.</li>

            <li className="list-decimal ">. Learn the fundamentals of Laravel and how to build
              dynamic web applications.</li>

            <li className="list-decimal ">Develop critical problem-solving skills for creating efficient
              and scalable web solutions</li>

            <li className="list-decimal ">  Evaluate and refine your own code while also reviewing
              and improving the work of others.</li>

            <li className="list-decimal ">Collaborate with a diverse community of learners to enhance
              your skills and gain real-world insights into web development.</li>
          </ol>


        </div>
        <div className="w-[433px] h-[495px]">
          <img src="/assets/readingman.png" alt="" className="rounded-lg " />
        </div>
      </div>
      <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md ">Benefits</button>
      <div className="flex justify- item-center gap-[50px] ">
      <div className="w-[400px] h-[200px] py-[0px]">
          <img src="/assets/hands.png" alt="" className="rounded-lg " />
        </div>
        <div className="w-[600px] text-[20px]">
          <p>Here’s what you’ll gain by enrolling in our Web Application Development (Laravel) course:</p>

          <ol className="list-disc space-y-1 text-sm leading- text-[20px]">

            <li className="list-decimal ">
              <span className="font-bold">Job-Ready Skills</span> <br />Gain hands-on experience in full-stack development using industry-    relevant tools like HTML, CSS, JavaScript, PHP, and Laravel.</li>

            <li className="list-decimal ">.
            <span className="font-bold">Real-World Projects</span> <br /> Build and deploy practical applications—portfolio-ready projects that showcase your capabilities to employers or clients..</li>

            <li className="list-decimal ">
            <span className="font-bold">Expert Mentorship</span> <br />Learn from seasoned developers and instructors who guide you with personalized support and feedback every step of the way..</li>

            <li className="list-decimal "> 
            <span className="font-bold">Career Advancement Opportunities</span> <br />Boost your confidence for freelancing, tech jobs, or entrepreneurship with strong foundational and advanced programming skills..</li>

            <li className="list-decimal ">
            <span className="font-bold">Community & Collaboration</span> <br />As you learn, you’ll build a solid portfolio of real-world projects—essential for getting freelance gigs, internships, or landing that first tech job..</li>

            <li className="list-decimal ">
            <span className="font-bold">Professional Portfolio Building</span> <br />As you learn, you’ll build a solid portfolio of real-world projects—essential for getting freelance gigs, internships, or landing that first tech job.</li>
          </ol>


        </div>
       
      </div>
    </section>
  )
}

export default displayCourses
