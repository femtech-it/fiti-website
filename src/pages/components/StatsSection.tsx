import React from 'react';

const StatsSection: React.FC = () => {
    const stats = [
        { value: '30+', label: 'Courses' },
        { value: '5000+', label: 'Alumni' },
        { value: '7000+', label: 'Community' },
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-6 md:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-primary text-white p-8 md:p-10 rounded-2xl shadow-xl text-center transform hover:scale-[1.03] transition-all duration-300"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2">{stat.value}</div>
                            <div className="text-lg md:text-xl font-medium opacity-90">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
