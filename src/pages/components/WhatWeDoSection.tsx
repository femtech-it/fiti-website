import React from 'react';

const services = [
    {
        title: 'Coding for Children',
        image: '/assets/coding_children.png',
    },
    {
        title: 'Enterprise Solution Development',
        image: '/assets/enterprise_sol.png',
    },
    {
        title: 'One-On-One Training',
        image: '/assets/one_on_one.png',
    },
    {
        title: 'Online Training',
        image: '/assets/online_training.png',
    },
    {
        title: 'Vocational Tech Training',
        image: '/assets/laptop.png', // Using existing asset
    },
    {
        title: 'Consultancy',
        image: '/assets/bussunes.png', // Using existing asset
    },
    {
        title: 'Corporate Training',
        image: '/assets/instructor_img.png', // Using existing asset
    },
    {
        title: 'Professional IT Training',
        image: '/assets/academy.png', // Using existing asset
    },
];

const WhatWeDoSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="md:text-5xl text-4xl flex flex-col items-center">
                        What we do
                        <span className="absolute bottom-1 left-0 w-full h-1.5 bg-secondary rounded-full"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
