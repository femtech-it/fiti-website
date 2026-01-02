import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { LuCalendar } from "react-icons/lu";
import { FaHandPointer } from "react-icons/fa";

interface CourseData {
    id: string;
    title: string;
    description: string;
    duration: string;
    image: string;
    color: string;
}

const courses: CourseData[] = [
    {
        id: 'graphic-design',
        title: 'GRAPHIC DESIGN',
        description: 'Master the art of visual communication with FEMTECH\'s Graphic Design training, where creativity meets industry-ready skills for a successful design career.',
        duration: '10 Weeks',
        image: '/assets/design.png',
        color: '#F67809'
    },
    {
        id: 'website-design',
        title: 'WEBSITE DESIGN',
        description: 'Learn to create stunning, responsive websites with modern design principles and user experience best practices.',
        duration: '12 Weeks',
        image: '/assets/w2.jpg',
        color: '#0010A3'
    },
    {
        id: 'frontend-dev',
        title: 'FRONTEND DEV',
        description: 'Build interactive web applications using React, JavaScript, and modern frontend technologies.',
        duration: '16 Weeks',
        image: '/assets/w2.jpg',
        color: '#0010A3'
    },
    {
        id: 'data-science',
        title: 'DATA SCIENCE',
        description: 'Dive into data analysis, machine learning, and AI to unlock insights and drive business decisions.',
        duration: '20 Weeks',
        image: '/assets/w2.jpg',
        color: '#0010A3'
    }
];

const ReadyToElevateSection: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<string | null>('graphic-design');

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl text-gray-700 relative inline-block">
                        Ready to Elevate Your Tech Career?
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary"></span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Side: Interactive Cards */}
                    <div className="w-full lg:w-3/5">
                        <div className="flex gap-3 md:gap-4 h-[450px] md:h-[500px] justify-center">
                            {courses.map((course) => (
                                <motion.div
                                    key={course.id}
                                    className="relative cursor-pointer"
                                    onMouseEnter={() => setHoveredCard(course.id)}
                                    onMouseLeave={() => setHoveredCard('graphic-design')}
                                    initial={false}
                                    animate={{
                                        width: hoveredCard === course.id ? '320px' : '64px',
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.4, 0, 0.2, 1]
                                    }}
                                >
                                    <AnimatePresence mode="wait">
                                        {hoveredCard === course.id ? (
                                            // Expanded Card View
                                            <motion.div
                                                key="card"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
                                            >
                                                <div className="h-48 overflow-hidden">
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-6 pb-8 flex flex-col flex-grow">
                                                    <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">
                                                        {course.title}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                                        {course.description}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-gray-700 font-bold mb-6">
                                                        <LuCalendar className="text-gray-900 text-xl" />
                                                        <span className="text-base">{course.duration}</span>
                                                    </div>
                                                    <button
                                                        className="w-full text-white py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-base"
                                                        style={{ backgroundColor: course.color }}
                                                    >
                                                        Download Brochure
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            // Collapsed Pillar View
                                            <motion.div
                                                key="pillar"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="w-full h-full bg-[#0010A3] rounded-3xl flex flex-col items-center justify-center py-6 md:py-10 text-white relative overflow-hidden shadow-xl"
                                            >
                                                <FaHandPointer className="text-lg md:text-xl opacity-60 transform rotate-45 absolute top-6" />
                                                <div className="flex items-center justify-center h-full">
                                                    <span className="whitespace-nowrap font-black text-lg md:text-xl tracking-widest uppercase transform -rotate-90">
                                                        {course.title}
                                                    </span>
                                                </div>
                                                <div className="w-1 md:w-1.5 h-1/3 bg-white/20 rounded-full absolute bottom-6"></div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Text and CTA */}
                    <div className="w-full lg:w-2/5 text-center lg:text-left">
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
                            If you're passionate about starting or growing a career in tech, FEMTECH is here for you. We provide hands-on, industry-relevant training, equipping you with the skills needed for the future of work while offering certifications and opportunities that open doors locally and globally.
                        </p>
                        <Link to="/courses">
                            <Button
                                type="primary"
                                size="large"
                                className="bg-[#F67809] border-none hover:bg-[#F67809]/90 h-16 px-14 text-xl font-bold rounded-2xl shadow-2xl transform transition-transform hover:scale-105"
                            >
                                Explore Our Courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToElevateSection;
