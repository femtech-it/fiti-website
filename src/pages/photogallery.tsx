import { motion } from "framer-motion";
import { pageTransition, staggerContainer, fadeInUp } from "../utils/animations";
import SEO from "../components/SEO";
import { PAGE_SEO, DEFAULT_SEO } from "../utils/seo-config";

const Photogallery = () => {
  const DisplayFirstImg = {
    img: "../assets/galleryImg.png",
  }
  const DisplaySecondImg = {
    img: "../assets/studentImg2.png",
  }

  const repeatedIMG = Array.from({ length: 16 }, () => DisplayFirstImg);
  const repeatedSecondIMG = Array.from({ length: 16 }, () => DisplaySecondImg);

  return (
    <motion.section
      className="bg-gray-50 pt-24 pb-20"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <SEO
        title={PAGE_SEO.gallery.title}
        description={PAGE_SEO.gallery.description}
        keywords={PAGE_SEO.gallery.keywords}
        canonical={`${DEFAULT_SEO.siteUrl}/gallery`}
        ogImage={PAGE_SEO.gallery.ogImage}
      />
      <div className="relative mb-16">
        <div className="w-full h-[300px] md:h-[500px] overflow-hidden">
          <img src="/assets/gallery_img.png" alt="Gallery Hero" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center -mt-6 md:-mt-10">
          <button className="bg-primary py-3 md:py-4 px-10 md:px-20 rounded-tl-2xl rounded-br-2xl text-white font-bold text-xl md:text-3xl lg:text-4xl shadow-2xl">
            PHOTO GALLERY
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl space-y-24">
        {/* Training Sessions */}
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-3xl md:text-5xl font-black text-center text-gray-800">Training Sessions</h1>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full place-items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {repeatedIMG.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="w-full aspect-square overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform"
              >
                <img src={item.img} alt={`Training ${index}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
          <button className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-12 rounded-xl transition-transform hover:scale-105 shadow-lg">
            View More
          </button>
        </div>

        {/* Event and Workshop */}
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-3xl md:text-5xl font-black text-center text-gray-800">Event and Workshop</h1>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full place-items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {repeatedSecondIMG.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="w-full aspect-square overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform"
              >
                <img src={item.img} alt={`Event ${index}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
          <button className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-12 rounded-xl transition-transform hover:scale-105 shadow-lg">
            View More
          </button>
        </div>

        {/* Submit Photos */}
        <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-xl text-center border border-gray-100 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">Submit Your Pictures</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have photos from a FEMTECH event or project? Upload them to be featured in our gallery!
          </p>
          <button className="bg-secondary hover:bg-opacity-90 text-white font-bold py-4 px-12 rounded-xl transition-transform hover:scale-105 shadow-lg">
            Upload Photos
          </button>
        </div>

        {/* Virtual Tour */}
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-800 mb-2">Take a virtual tour</h1>
            <p className="text-lg text-gray-600">A behind-the-scenes look at our training center</p>
          </div>
          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/s0op1fBWXyY?si=x5rlCIGZawU9QUSI"
              title="Virtual Tour"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Latest Videos */}
        <div className="flex flex-col items-center gap-8 text-center pb-12">
          <h1 className="text-3xl md:text-5xl font-black text-gray-800">Watch our latest videos!</h1>
          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/5_DAfHWPiLs?si=2xzNokqDrygUcyhN"
              title="Latest Videos"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Photogallery
