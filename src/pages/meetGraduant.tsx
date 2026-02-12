import Graduatecard from "./components/graduate-card"
import SEO from "../components/SEO";
import { PAGE_SEO, DEFAULT_SEO } from "../utils/seo-config";

const MeetGraduant = () => {
  return (
    <section className="bg-gray-50 pt-24 pb-20">
      <SEO
        title={PAGE_SEO.meetGraduates.title}
        description={PAGE_SEO.meetGraduates.description}
        keywords={PAGE_SEO.meetGraduates.keywords}
        canonical={`${DEFAULT_SEO.siteUrl}/meet-graduates`}
        ogImage={PAGE_SEO.meetGraduates.ogImage}
      />
      <div className="relative mb-16">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img src="/assets/granduant2.png" alt="Graduates Hero" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center -mt-6 md:-mt-10">
          <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
            MEET OUR TOP GRADUATES
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Here are some of our outstanding graduates who have gone above and beyond in their training. These individuals have been handpicked based on their performance, dedication, and skill level.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {[...Array(15)].map((_, index) => (
            <div key={index} className="hover:scale-105 transition-transform duration-300">
              <Graduatecard />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetGraduant
