import CourseCard from "./components/course-card"

const CoursesPages = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-no-repeat mt-[100px] gap-[100px]">
      <div>
        <img src="/assets/courseImg.png" alt="" />
        <div className="flex flex-col gap-5 mt-[-230px] justify-center items-center text-center text-white">
          <p className="font-medium text-[20px]">Master In-Demand Tech Skills & Future-Proof Your Career</p>
          <p>Gain job-ready tech skills with expert-led training and hands-on projects <br />by build real-world projects, earn certifications, and stand out in the tech industry. <br />You're not alone! Learn, network, and grow with a community of <br />tech enthusiasts</p>
        </div>
        <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[50px]">Explore Our Courses</button>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-20 ">
          {[...Array(30)].map((_, index) => (
            <CourseCard key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default CoursesPages
