const terms = [
  {
    title: "Attendance Requirement",
    content:
      "A minimum attendance of 85% is required to qualify for the final examination.",
  },
  {
    title: "Capstone Project Presentation",
    content:
      "Students are required to present the Final Capstone Project within three months after completing their  coursework before they are eligible to sit for the final examination. Those who are unable to meet this  requirement must formally defer their admission. Failure to do so may result in the forfeiture of their  admission",
  },
  {
    title: "Exam Re-sit Fee",
    content:
      "Students who do not pass their End of training examination must pay a re-sit fee of ₦10,000.",
  },
  {
    title: "Course Deferment",
    content:
      "Students must properly defer their admission if they will be consistently absent from the Institute for more  than 2 (Two) weeks. Failure to properly defer admission will result in forfeiture of the registration with no  refund.",
  },
  {
    title: "Re-enrollment Policy",
    content:
      "If a project is not properly deferred and approved, student will pay 50% of prevailing tuition fee as re enrollment charge.",
  },
  {
    title: "Cancellation & Refund Policy ",
    content:
      "Students must pay 70% of the tuition fee upfront and the remaining 30% balance must be paid within one month of the initial payment. Failure to complete the payment within this period will result in the suspension of classes until full payment is made.",
  },
  {
    title: "Makeup Class Policy",
    content:
      "Make-up classes are available for students who missed a session withou prior notification or need additional support, scheduled at the institute’s discretion for ₦10,000 per 2-hour session, with no fee waivers",
  },
  {
    title: "Makeup Class Policy",
    content:
      "Make-up classes are available for students who missed a session withou prior notification or need additional support, scheduled at the institute’s discretion for ₦10,000 per 2-hour session, with no fee waivers",
  },
  {
    title: "Makeup Class Policy",
    content:
      "Make-up classes are available for students who missed a session withou prior notification or need additional support, scheduled at the institute’s discretion for ₦10,000 per 2-hour session, with no fee waivers",
  },
];
const Termspage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center mt-[10px] gap-[20px] ">
      <div className="bg-[/assets/termsImg.png]">
        <img src="/assets/termsImg.png" alt="" className="" />
        <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px]">Terms and Conditions</button>
      </div>

      <p className="px-[50px] ">
        Dear Prospective Student,  <br />
        At Femtech Information Technology Institute. We are dedicated to providing a structured and  rewarding learning experience. Please review and acknowledge the following terms and conditions to  ensure smooth operations and academic excellence.
      </p>


<div className="min-h-screen  flex justify-center items-center  px-4">
      <div className="bg-white  rounded-lg  p-8 flex flex-col gap-[10px] items-start">
        {terms.map((item, index) => (
          <div key={index} className="flex items-start mb-6  max-w-[1000px] ">
            {/* Circle Number */}
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4 p-4">
              {index + 1}
            </div>
            {/* Title and Description */}
            <div>
              <h3 className="font-semibold text-lg text-[20px]">{item.title} :</h3>
              <p className="text-gray-700 text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </section>
  )
}

export default Termspage
