import SEO from "../components/SEO";
import { PAGE_SEO, DEFAULT_SEO } from "../utils/seo-config";

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
    <section className="bg-gray-50 pt-24 pb-20">
      <SEO
        title={PAGE_SEO.hireGraduate.title}
        description={PAGE_SEO.hireGraduate.description}
        keywords={PAGE_SEO.hireGraduate.keywords}
        canonical={`${DEFAULT_SEO.siteUrl}/hire-graduate`}
        ogImage={PAGE_SEO.hireGraduate.ogImage}
      />
      <div className="relative mb-16">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img src="/assets/graduateImg.png" alt="Graduate Hero" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center -mt-6 md:-mt-10">
          <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
            HIRE OUR GRADUATES
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center mb-24">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At FEMTECH, we don’t just train — we nurture real-world tech talent. Our students have been equipped with hands-on skills in design, development, data, and digital tools — and they’re ready to help your business grow. Whether you’re hiring interns, full-time team members, or remote freelancers, our alumni are trained, tested, and tech-smart.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white p-8 md:p-16 rounded-[50px] shadow-2xl border border-gray-100 mb-24">
          <h1 className="text-3xl md:text-5xl font-black text-center text-gray-800 mb-16">Who can hire from us?</h1>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <img src="/assets/bussunes.png" alt="Partners" className="w-full rounded-[40px] shadow-xl" />
            </div>
            <div className="w-full lg:w-1/2">
              <ul className="space-y-6">
                {employers.map((item, index) => (
                  <li key={index} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <span className="text-xl font-bold text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-gray-800 mb-6">Talents you can find here</h1>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {talents.map((talent, index) => (
              <div
                key={index}
                className="bg-[#0000A3] text-white p-8 rounded-3xl font-bold text-xl shadow-xl hover:translate-y-[-5px] transition-transform flex items-center justify-center text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
                {talent}
              </div>
            ))}
          </div>

          <button className="bg-secondary hover:bg-opacity-90 text-white font-black text-2xl py-5 px-16 mt-20 rounded-2xl shadow-2xl transition-all hover:scale-105">
            Hire Now
          </button>
        </div>

        <div className="bg-white p-8 md:p-16 rounded-[50px] shadow-2xl border border-gray-100 mt-24">
          <h1 className="text-3xl md:text-5xl font-black text-center text-gray-800 mb-6">Why Hire from FEMTECH?</h1>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {opions.map((option, index) => (
                <div key={index} className="flex items-center gap-6 justify-end text-right group">
                  <p className="text-lg font-bold text-gray-700 leading-tight">{option.text}</p>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl p-4 shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <img src={option.image} className="w-full h-full object-contain" alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {rightoptiobnn.map((options, index) => (
                <div key={index} className="flex items-center gap-6 text-left group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl p-4 shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <img src={options.image} className="w-full h-full object-contain" alt="" />
                  </div>
                  <p className="text-lg font-bold text-gray-700 leading-tight">{options.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireGraduate
