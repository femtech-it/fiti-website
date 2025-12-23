import React from 'react';
import { Button } from 'antd';
import { LuCalendar } from "react-icons/lu";
import { FaHandPointer } from "react-icons/fa";

const ReadyToElevateSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl text-gray-700 relative inline-block">
                        Ready to Elevate Your Tech Career?
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary"></span>
                    </h2>
                </div>

                {/* Left Side: Interactive Cards and Pillars */}
                <div className="w-full lg:w-3/5 flex flex-col sm:flex-row items-center justify-center gap-8 relative">

                    {/* Active Card: Graphic Design */}
                    <div className="w-full sm:w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col transform transition-transform hover:scale-[1.02] z-10">
                        <div className="h-48 overflow-hidden">
                            <img src="/assets/design.png" alt="Graphic Design" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 pb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">GRAPHIC DESIGN</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Master the art of visual communication with FEMTECH's Graphic Design training, where creativity meets industry-ready skills for a successful design career.
                            </p>
                            <div className="flex items-center gap-2 text-gray-700 font-bold mb-8">
                                <LuCalendar className="text-gray-900 text-xl" />
                                <span className="text-base">10 Weeks</span>
                            </div>
                            <button className="w-full bg-[#F67809] text-white py-3.5 rounded-full font-bold shadow-lg hover:shadow-orange-200 transition-all flex items-center justify-center text-base">
                                Download Brochure
                            </button>
                        </div>
                    </div>

                    {/* Inactive Pillars */}
                    <div className="flex gap-3 md:gap-4 h-[350px] md:h-[440px]">
                        {/* Pillar 1: Website Design */}
                        <div className="w-12 md:w-16 h-full bg-[#0010A3] rounded-3xl flex flex-col items-center justify-between py-6 md:py-10 text-white relative group cursor-pointer overflow-hidden shadow-xl">
                            <FaHandPointer className="text-lg md:text-xl opacity-60 transform rotate-45" />
                            <span className="whitespace-nowrap font-black text-xl md:text-2xl tracking-widest uppercase transform -rotate-90 origin-center">
                                WEBSITE DESIGN
                            </span>
                            <div className="w-1 md:w-1.5 h-1/2 bg-white/20 rounded-full absolute top-1/4 left-1.5"></div>
                        </div>

                        {/* Pillar 2: Frontend Dev */}
                        <div className="w-12 md:w-16 h-full bg-[#0010A3] rounded-3xl flex flex-col items-center justify-between py-6 md:py-10 text-white relative group cursor-pointer overflow-hidden shadow-xl">
                            <FaHandPointer className="text-lg md:text-xl opacity-60 transform rotate-45" />
                            <span className="whitespace-nowrap font-black text-xl md:text-2xl tracking-widest uppercase transform -rotate-90 origin-center">
                                FRONTEND DEV
                            </span>
                            <div className="w-1 md:w-1.5 h-1/2 bg-white/20 rounded-full absolute top-1/4 left-1.5"></div>
                        </div>

                        {/* Pillar 3: Data Science */}
                        <div className="w-12 md:w-16 h-full bg-[#0010A3] rounded-3xl flex flex-col items-center justify-between py-6 md:py-10 text-white relative group cursor-pointer overflow-hidden shadow-xl">
                            <FaHandPointer className="text-lg md:text-xl opacity-60 transform rotate-45" />
                            <span className="whitespace-nowrap font-black text-xl md:text-2xl tracking-widest uppercase transform -rotate-90 origin-center">
                                DATA SCIENCE
                            </span>
                            <div className="w-1 md:w-1.5 h-1/2 bg-white/20 rounded-full absolute top-1/4 left-1.5"></div>
                        </div>
                    </div>

                    {/* Overlapping Circles EA - Hidden on very small screens */}
                    <div className="hidden sm:flex absolute left-[245px] top-[260px] md:top-[260px] z-20 bg-[#1A1A1A] rounded-2xl p-2 md:p-2.5 shadow-2xl scale-100 md:scale-110 border border-gray-800">
                        <div className="w-9 h-9 md:w-11 md:h-11 bg-yellow-400 rounded-full flex items-center justify-center text-xl md:text-2xl font-black border-2 border-transparent">E</div>
                        <div className="w-9 h-9 md:w-11 md:h-11 bg-green-500 rounded-full flex items-center justify-center text-xl md:text-2xl font-black text-white border-2 border-transparent -ml-2.5">A</div>
                    </div>
                </div>

                {/* Right Side: Text and CTA */}
                <div className="w-full lg:w-2/5 text-center lg:text-left pt-8">
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
                        If you're passionate about starting or growing a career in tech, FEMTECH is here for you. We provide hands-on, industry-relevant training, equipping you with the skills needed for the future of work while offering certifications and opportunities that open doors locally and globally.
                    </p>
                    <Button
                        type="primary"
                        size="large"
                        className="bg-[#F67809] border-none hover:bg-[#F67809]/90 h-16 px-14 text-xl font-bold rounded-2xl shadow-2xl transform transition-transform hover:scale-105"
                    >
                        Explore Our Courses
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ReadyToElevateSection;
