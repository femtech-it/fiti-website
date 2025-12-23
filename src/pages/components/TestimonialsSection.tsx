import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Jayden B.',
        role: 'Frontend Developer',
        quote: "FEMTECH Training is more than just a school; it's a community. The mentorship, peer support, and career guidance helped me transition into the tech industry seamlessly. Highly recommended!",
        image: '/assets/faruk.png',
        bgColor: 'bg-[#B4BC5C]', // Olive green color from image
        quoteColor: 'text-[#B4BC5C]',
    },
    {
        name: 'Aisha O.',
        role: 'UI/UX Designer',
        quote: "FEMTECH Training gave me the skills and confidence to start my career in tech. The hands-on projects and supportive instructors made learning easy and exciting. Today, I work as a UI/UX Designer, and I owe it all to FEMTECH!",
        image: '/assets/student3.png',
        bgColor: 'bg-[#0010A3]', // Dark blue color from image
        quoteColor: 'text-[#0010A3]',
    },
    // Adding a duplicate set for demonstration of carousel if needed
    {
        name: 'Abubakar M.',
        role: 'Software Engineer',
        quote: "The environment at FEMTECH is so conducive for learning. I was able to move from zero to hero in just a few months. The support system is incredible and truly life-changing.",
        image: '/assets/faruk.png',
        bgColor: 'bg-[#B4BC5C]',
        quoteColor: 'text-[#B4BC5C]',
    }
];

const TestimonialsSection: React.FC = () => {
    const carouselRef = useRef<any>(null);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl text-gray-800 relative inline-block">
                        What our Students Say
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"></span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Side: Quote Icon and Intro */}
                    <div className="w-full lg:w-1/4 flex flex-col items-center text-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0010A3] rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-xl">
                            <FaQuoteLeft className="text-white text-3xl md:text-5xl" />
                        </div>
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xs mx-auto">
                            Hear firsthand experiences from our students and alumni on how our hands-on courses, expert instructors, and supportive learning environment have empowered them to excel in the tech industry.
                        </p>
                    </div>

                    {/* Right Side: Carousel */}
                    <div className="w-full lg:w-3/4 relative">
                        <Carousel
                            ref={carouselRef}
                            dots={false}
                            slidesToShow={2}
                            infinite={true}
                            responsive={[
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 1,
                                    }
                                }
                            ]}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="px-4 py-8">
                                    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden relative border border-gray-100 min-h-[500px] flex flex-col">
                                        <div className="p-10 flex-grow">
                                            <FaQuoteLeft className={`text-4xl mb-6 ${testimonial.quoteColor}`} />
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                {testimonial.quote}
                                            </p>
                                        </div>

                                        {/* Student Info with Wave Background */}
                                        <div className="relative mt-auto">
                                            {/* Wave SVG */}
                                            <div className={`absolute bottom-0 left-0 w-full h-48 ${testimonial.bgColor}`}>
                                                <svg
                                                    viewBox="0 0 500 150"
                                                    preserveAspectRatio="none"
                                                    className="absolute -top-16 left-0 w-full h-16 fill-current"
                                                    style={{ color: 'inherit' }}
                                                >
                                                    <path d="M0,80 C150,150 350,0 500,80 L500,150 L0,150 Z"></path>
                                                </svg>
                                            </div>

                                            <div className="relative z-10 flex flex-col items-center pb-8 pt-4">
                                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl -mt-20 mb-4">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <h4 className="text-2xl font-bold text-white">{testimonial.name}</h4>
                                                <p className="text-white/80 font-medium">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>

                        {/* Custom Navigation Arrows */}
                        <div className="flex justify-end gap-6 mt-12">
                            <button
                                onClick={() => carouselRef.current?.prev()}
                                className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md group"
                            >
                                <FaChevronLeft className="text-xl group-hover:scale-110" />
                            </button>
                            <button
                                onClick={() => carouselRef.current?.next()}
                                className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md group"
                            >
                                <FaChevronRight className="text-xl group-hover:scale-110" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
