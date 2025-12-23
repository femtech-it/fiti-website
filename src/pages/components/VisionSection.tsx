import React from 'react';

const VisionSection: React.FC = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative">
                        {/* Blue Frame Effect */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#1DA1F2] rounded-3xl -z-0"></div>
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="/assets/vision_vr.png"
                                alt="Our Vision"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3xl md:text-5xl text-gray-800 mb-8 flex flex-col relative">
                                Our Vision
                                <span className="absolute -bottom-2 left-1/2 md:left-0 w-24 h-1 bg-secondary -translate-x-1/2 md:translate-x-0"></span>
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed">
                                Our vision is to be a leading technology training institute, fostering a world where individuals, regardless of background, have equal access to tech education and opportunities. We aim to create a generation of skilled innovators and professionals who will drive technological advancement, entrepreneurship, and economic growth globally.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
