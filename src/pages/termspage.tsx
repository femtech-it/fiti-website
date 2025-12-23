const terms = [
  {
    title: "Attendance Requirement",
    content:
      "A minimum attendance of 85% is required to qualify for the final examination.",
  },
  {
    title: "Capstone Project Presentation",
    content:
      "Students are required to present the Final Capstone Project within three months after completing their coursework before they are eligible to sit for the final examination. Those who are unable to meet this requirement must formally defer their admission. Failure to do so may result in the forfeiture of their admission.",
  },
  {
    title: "Exam Re-sit Fee",
    content:
      "Students who do not pass their End of training examination must pay a re-sit fee of ₦10,000.",
  },
  {
    title: "Course Deferment",
    content:
      "Students must properly defer their admission if they will be consistently absent from the Institute for more than 2 (Two) weeks. Failure to properly defer admission will result in forfeiture of the registration with no refund.",
  },
  {
    title: "Re-enrollment Policy",
    content:
      "If a project is not properly deferred and approved, student will pay 50% of prevailing tuition fee as re-enrollment charge.",
  },
  {
    title: "Cancellation & Refund Policy",
    content:
      "Students must pay 70% of the tuition fee upfront and the remaining 30% balance must be paid within one month of the initial payment. Failure to complete the payment within this period will result in the suspension of classes until full payment is made.",
  },
  {
    title: "Makeup Class Policy",
    content:
      "Make-up classes are available for students who missed a session without prior notification or need additional support, scheduled at the institute’s discretion for ₦10,000 per 2-hour session, with no fee waivers.",
  }
];

const Termspage = () => {
  return (
    <section className="bg-gray-50 pt-24 pb-20">
      <div className="relative mb-16">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img src="/assets/termsImg.png" alt="Terms Hero" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center -mt-6 md:-mt-10">
          <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
            Terms and Conditions
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl mb-16">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <span className="font-bold block mb-2">Dear Prospective Student,</span>
          At Femtech Information Technology Institute, we are dedicated to providing a structured and rewarding learning experience. Please review and acknowledge the following terms and conditions to ensure smooth operations and academic excellence.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-gray-100 space-y-10">
          {terms.map((item, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl md:text-2xl text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Termspage
