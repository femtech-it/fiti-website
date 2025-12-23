import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCourseById } from "../api/coursesApi";
import { FaClock, FaCertificate, FaChalkboardTeacher, FaSpinner } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";

const DisplayCourses = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['course', id],
    queryFn: () => fetchCourseById(id as string),
    enabled: !!id,
  });

  const course = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <FaSpinner className="animate-spin text-5xl text-primary" />
      </div>
    );
  }

  if (isError || !course) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
          <p className="text-red-500 font-bold text-xl">Error loading course details.</p>
          <p className="text-gray-500 mt-2">{(error as Error)?.message || "Course not found."}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 pt-24 pb-20 overflow-x-hidden">
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start relative">

          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            <div className="space-y-4">
              <p className="text-primary font-bold text-sm uppercase tracking-wider">Explore Our Courses / Courses Overview</p>
              <h1 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight">
                {course.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                {course.description}
              </p>
            </div>

            <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 group">
              <div className="w-full h-[250px] md:h-[400px] overflow-hidden">
                <img src="/assets/laptop.png" alt={course.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 p-6 md:p-10">
                <div className="p-4 flex flex-col items-center text-center">
                  <div className="bg-primary/5 p-3 rounded-2xl mb-3 text-primary">
                    <MdOutlineDateRange className="text-2xl" />
                  </div>
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Duration</p>
                  <p className="font-bold text-gray-800">{course.duration} Weeks</p>
                </div>
                <div className="p-4 flex flex-col items-center text-center">
                  <div className="bg-primary/5 p-3 rounded-2xl mb-3 text-primary">
                    <FaClock className="text-2xl" />
                  </div>
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Days/Week</p>
                  <p className="font-bold text-gray-800">{course.weekSchedule || "To be announced"}</p>
                </div>
                <div className="p-4 flex flex-col items-center text-center">
                  <div className="bg-primary/5 p-3 rounded-2xl mb-3 text-primary">
                    <FaChalkboardTeacher className="text-2xl" />
                  </div>
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Classes</p>
                  <p className="font-bold text-gray-800">{course.classType?.length > 0 ? course.classType.join(", ") : "Online/Physical"}</p>
                </div>
                <div className="p-4 flex flex-col items-center text-center border-none md:border-l">
                  <div className="bg-primary/5 p-3 rounded-2xl mb-3 text-primary">
                    <IoPricetagsOutline className="text-2xl" />
                  </div>
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Fee</p>
                  <p className="font-bold text-gray-800">₦ {Intl.NumberFormat().format(course.price)}</p>
                </div>
              </div>
            </div>

            <div className="relative pt-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
                <button className="bg-primary py-3 px-10 rounded-2xl text-white font-bold text-lg shadow-xl">
                  Course Description
                </button>
              </div>
              <div className="bg-gradient-to-br from-[#D7D6EE]/30 to-[#FAE3D1]/30 p-8 md:p-12 pt-16 md:pt-16 rounded-[40px] shadow-sm border border-white/50">
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                  {course.description}
                </p>
                {course.courseOutlines && course.courseOutlines.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="text-primary font-black tracking-widest uppercase flex items-center gap-3">
                      <span className="w-8 h-1 bg-primary rounded-full"></span>
                      Course Outline
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      {course.courseOutlines.map((item: any, i: number) => (
                        <li key={i} className="flex gap-3 items-center bg-white/50 p-4 rounded-2xl shadow-sm">
                          <span className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-lg font-black text-xs shrink-0">{i + 1}</span>
                          <span className="text-sm font-medium">{typeof item === 'string' ? item : item.title || item.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-20">
              <div className="flex justify-center md:justify-start mb-10">
                <button className="bg-primary py-3 px-10 rounded-2xl text-white font-bold text-lg shadow-xl">
                  Who will you learn with?
                </button>
              </div>
              <div className="bg-[#FAE3D1]/50 p-8 md:p-12 rounded-[50px] flex flex-col md:flex-row items-center gap-10 border border-orange-100">
                <div className="w-48 h-48 rounded-full border-8 border-white shadow-2xl overflow-hidden shrink-0">
                  <img src="/assets/faruk.png" alt="Instructor" className="w-full h-full object-cover" />
                </div>
                <div className="bg-primary text-white p-8 rounded-[40px] shadow-2xl relative">
                  <div className="absolute -top-4 left-10 md:-left-4 md:top-1/2 md:-translate-y-1/2 w-8 h-8 bg-primary rotate-45"></div>
                  <h1 className="text-2xl font-black mb-4">Instructor</h1>
                  <p className="text-lg leading-relaxed opacity-90">
                    Learn from industry experts with verified experience. Our mentors are dedicated to equipping students with hands-on, industry-relevant skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-1/3 w-full lg:sticky lg:top-32">
            <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-black text-gray-800 leading-tight mb-6">
                {course.name}
              </h2>

              {course.requirements && course.requirements.length > 0 && (
                <div className="bg-primary/5 p-6 rounded-3xl mb-8">
                  <p className="text-sm text-primary font-black uppercase tracking-widest mb-4">Prerequisites</p>
                  <ul className="space-y-3">
                    {course.requirements.map((item: any, i: number) => (
                      <li key={i} className="flex gap-3 items-center text-sm font-bold text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {typeof item === 'string' ? item : item.title || item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-6 mb-10">
                {[
                  { icon: <MdOutlineDateRange />, text: `${course.duration} Weeks` },
                  { icon: <FaClock />, text: course.weekSchedule || "Schedule TBD" },
                  { icon: <FaCertificate />, text: course.hasCertificate ? "Certified Course" : "No Certificate" },
                  { icon: <PiStudent />, text: `₦ ${Intl.NumberFormat().format(course.price)}` },
                  { icon: <BsGraphUpArrow />, text: course.studentLevel }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-600 font-bold border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div className="text-2xl text-primary">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <button className="w-full bg-primary hover:bg-opacity-90 text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all">
                  Download Curriculum
                </button>
                <Link to={`/registration?courseId=${course.id}`} className="w-full bg-secondary hover:bg-opacity-90 text-white py-4 rounded-2xl font-bold text-lg shadow-xl transition-all block text-center">
                  ENROLL NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="flex justify-center mb-16">
            <button className="bg-primary py-4 px-12 md:px-20 rounded-tl-3xl rounded-br-3xl text-white font-black text-2xl md:text-4xl shadow-2xl">
              Learning Outcome
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5 space-y-8">
              <p className="text-xl md:text-2xl font-bold text-gray-800">By the end of this course, you’ll be able to:</p>
              <div className="space-y-6">
                {(course.courseOutcomes && course.courseOutcomes.length > 0 ? course.courseOutcomes : [
                  "Understand the core principles and modern architecture.",
                  "Master fundamentals to build dynamic applications.",
                  "Develop critical problem-solving skills for scalable solutions.",
                  "Refine your code through peer reviews and industry standards.",
                  "Collaborate with a community of builders."
                ]).map((item: any, i: number) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="font-black text-xl">{i + 1}</span>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">{typeof item === 'string' ? item : item.title || item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 w-full">
              <div className="bg-white p-4 rounded-[50px] shadow-2xl border border-gray-100">
                <img src="/assets/readingman.png" alt="Learning" className="w-full h-full object-cover rounded-[40px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className="flex justify-center mb-16">
            <button className="bg-primary py-4 px-12 md:px-20 rounded-tl-3xl rounded-br-3xl text-white font-black text-2xl md:text-4xl shadow-2xl">
              Benefits
            </button>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
            <div className="lg:w-2/5 w-full">
              <div className="bg-white p-4 rounded-[50px] shadow-2xl border border-gray-100">
                <img src="/assets/hands.png" alt="Collaboration" className="w-full h-full object-cover rounded-[40px]" />
              </div>
            </div>
            <div className="lg:w-3/5 space-y-8">
              <p className="text-xl md:text-2xl font-bold text-gray-800">Why choose our {course.name} course?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {(course.courseBenefits && course.courseBenefits.length > 0 ? course.courseBenefits : [
                  { title: "Job-Ready Skills", desc: "Gain hands-on experience in full-stack dev with industry tools." },
                  { title: "Real-World Projects", desc: "Build portfolio-ready apps that showcase your actual capabilities." },
                  { title: "Expert Mentorship", desc: "Learn from seasoned devs with personalized support." },
                  { title: "Career Growth", desc: "Boost confidence for freelancing, tech jobs, or entrepreneurship." },
                  { title: "Global Community", desc: "Join a massive network of builders and tech enthusiasts." },
                  { title: "Portfolio Building", desc: "Create a solid professional portfolio essential for your first job." }
                ]).map((item: any, i: number) => (
                  <div key={i} className="bg-white p-8 rounded-[30px] shadow-xl border border-gray-50 group hover:bg-primary transition-all duration-500">
                    <h3 className="font-black text-xl mb-3 text-gray-800 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-gray-600 group-hover:text-white/80 transition-colors">{item.desc || item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayCourses;
