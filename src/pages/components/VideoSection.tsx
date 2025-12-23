import React from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoSection: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="relative group max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
                    {/* Video Thumbnail */}
                    <img
                        src="/assets/studentimg.png"
                        alt="FITI Video Overview"
                        className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-500 group-hover:bg-black/20">
                        {/* Play Button */}
                        <button className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 md:border-4 border-white text-white group-hover:scale-110 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                            <FaPlay className="text-xl md:text-3xl ml-1 md:ml-2" />
                        </button>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white">
                        <h3 className="text-xl md:text-3xl font-black mb-1 md:mb-2 drop-shadow-lg">See how we are changing lives through tech</h3>
                        <p className="text-sm md:text-xl font-medium opacity-90 drop-shadow-md">Join over 5,000+ graduates who have started their journey with us.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
