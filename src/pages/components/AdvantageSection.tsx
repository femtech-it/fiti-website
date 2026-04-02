import React from 'react';

const AdvantageSection: React.FC = () => {
    const advantages = [
        { label: 'Training Kit', color: 'bg-secondary' },
        { label: 'Smart Classroom', color: 'bg-primary' },
        { label: 'Free Internet', color: 'bg-secondary' },
        { label: 'Flexible Payment', color: 'bg-primary' },
        { label: 'Flexible Schedule', color: 'bg-secondary' },
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">
                        FEMTECH Advantage
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    {advantages.map((adv, index) => (
                        <button
                            key={index}
                            className={`${adv.color} text-white px-8 py-3 rounded-md shadow-lg font-semibold transition-transform hover:scale-105 min-w-[180px]`}
                        >
                            {adv.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantageSection;
