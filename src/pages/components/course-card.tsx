import { MdEditCalendar } from "react-icons/md";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CourseCardProps {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
}

/* ORIGINAL COURSE CARD (COMMENTED OUT) 
const CourseCard = ({ id, name, price, duration }: CourseCardProps) => {
    return (
        <div className="relative w-[300px] h-[500px]">
            <div className="w-[300px] h-[500px] bg-white shadow-xl absolute overflow-hidden right-[50px] top-[-20px] rounded-br-2xl rounded-tl-2xl flex flex-col z-10">
                <div className="w-[100%] h-[200px] overflow-hidden">
                    <img src="/assets/w2.jpg" alt={name} className="w-[100%] h-full object-cover" />
                </div>
                <div className="p-3 flex flex-col gap-3 justify-between flex-1">
                    <h1 className="text-2xl font-bold leading-tight line-clamp-2" title={name}>{name}</h1>
                    <div className="flex items-center gap-2">
                        <MdEditCalendar />
                        <h1>{duration} weeks</h1>
                    </div>
                    <h1 className="text-3xl font-bold">&#8358;{Intl.NumberFormat().format(price)}</h1>
                    <Link to={`/course/${id}`} className="bg-primary text-white text-center py-2 rounded font-semibold hover:bg-opacity-90 transition-all">
                        View Course
                    </Link>
                </div>
            </div>
            <div className="w-[300px] h-[500px] bg-primary rounded-xl flex justify-center items-start courseCard-down p-2">
                <h1 className="transform rotate-180 text-3xl font-bold text-white text-center leading-tight mt-10" style={{ writingMode: 'vertical-rl' }}>
                    {name.length > 25 ? `${name.substring(0, 25)}...` : name}
                </h1>
            </div>
        </div>
    )
}
========== END ORIGINAL COURSE CARD ========== */

//  NEW MODERN COURSE CARD 
const CourseCard = ({ id, name, description, price, duration }: CourseCardProps) => {
    return (
        <motion.div
            className="group relative w-full max-w-[380px] h-[520px] bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
            {/* Course Image with Gradient Overlay */}
            <div className="relative w-full h-[220px] overflow-hidden">
                <img
                    src="/assets/w2.jpg"
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <MdEditCalendar className="text-primary text-lg" />
                    <span className="text-sm font-bold text-gray-800">{duration} Weeks</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-secondary/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">Professional</span>
                </div>
            </div>

            {/* Course Content */}
            <div className="p-6 flex flex-col gap-4 h-[300px]">
                {/* Course Title */}
                <h3 className="text-xl font-black text-gray-800 leading-tight line-clamp-2 min-h-[56px]" title={name}>
                    {name}
                </h3>

                {/* Course Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-grow">
                    {description || "Gain hands-on experience with industry-relevant skills. Expert-led training with practical projects and certification."}
                </p>

                {/* Course Features */}
                <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2">
                        <FaBookOpen className="text-primary" />
                        <span className="font-medium">Certified</span>
                    </div>
                    <div className="h-4 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                        <span className="font-medium">Expert-Led</span>
                    </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Course Fee</span>
                        <span className="text-xl font-black text-primary">
                            &#8358;{Intl.NumberFormat().format(price)}
                        </span>
                    </div>
                    <Link
                        to={`/course/${id}`}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group/btn"
                    >
                        View Course
                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
    )
}

export default CourseCard