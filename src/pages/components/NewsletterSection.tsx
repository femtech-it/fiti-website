import React from 'react';
import { Input } from 'antd';
import { IoMdSend } from "react-icons/io";

const NewsletterSection: React.FC = () => {
    return (
        <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto relative overflow-hidden bg-gradient-to-br from-primary to-[#0010A3] rounded-[30px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,16,163,0.3)] p-8 md:p-20 text-center">
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight">
                            Subscribe to <br className="sm:hidden" />
                            <span className="text-secondary">Our Newsletter</span>
                        </h2>
                        <p className="text-white/80 text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                            Stay updated with the latest tech trends, course announcements, and success stories from the FEMTECH Information Technology Training Centre.
                        </p>

                        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-[25px] border border-white/20 shadow-2xl">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <Input
                                    placeholder="Enter your Email Address"
                                    variant="borderless"
                                    className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg text-white placeholder:text-white/50 flex-grow focus:outline-none"
                                />
                                <button
                                    className="bg-secondary text-white h-12 md:h-14 px-6 md:px-10 text-lg md:text-xl font-bold rounded-xl md:rounded-[20px] shadow-xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <span>Subscribe</span>
                                    <IoMdSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        <p className="mt-8 md:mt-10 text-white/40 text-xs md:text-sm font-medium">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
