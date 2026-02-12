import React from 'react';

const MissionSection: React.FC = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
                    {/* Text Column */}
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl text-gray-800 mb-8 flex flex-col relative">
                                Our Mission
                                <span className="absolute -bottom-2 left-1/2 md:left-0 w-24 h-1 bg-secondary -translate-x-1/2 md:translate-x-0"></span>
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed">
                                To provide high-quality, hands-on training in technology and digital skills, empowering individuals to build successful careers in the tech industry. We are dedicated to bridging the digital skills gap through innovative education, mentorship, and career development, ensuring our learners are equipped with industry-relevant expertise to thrive in the modern workforce.
                            </p>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="/assets/mission_dart.png"
                                alt="Our Mission"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
