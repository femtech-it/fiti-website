import { motion } from "framer-motion";

const AnimatedTechHero = () => {


    return (

        <div className="relative w-full h-full flex items-center justify-center">
            <svg
                viewBox="0 0 600 600"
                className="w-full h-full max-w-[700px] md:max-w-[900px] lg:max-w-[1000px]"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Gradient Definitions */}
                <defs>
                    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0010A3" />
                        <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                    <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F67809" />
                        <stop offset="100%" stopColor="#fb923c" />
                    </linearGradient>
                    <linearGradient id="accentGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                    <linearGradient id="accentGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                    <radialGradient id="bgGrad">
                        <stop offset="0%" stopColor="#0010A3" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#F67809" stopOpacity="0.05" />
                    </radialGradient>
                </defs>

                {/* Background Circle */}
                <motion.circle
                    cx="300"
                    cy="300"
                    r="250"
                    fill="url(#bgGrad)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                {/* Central Hub - Represents Digital Learning */}
                <motion.circle
                    cx="300"
                    cy="300"
                    r="60"
                    fill="url(#primaryGrad)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />

                {/* Tech Icons Text in Center */}
                <motion.text
                    x="300"
                    y="310"
                    fontSize="24"
                    fill="white"
                    fontWeight="bold"
                    textAnchor="middle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    FITI
                </motion.text>

                {/* Orbiting Elements - Representing Different Tech Fields */}

                {/* 1. Design Tools - Top */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "300px 300px" }}
                >
                    <g transform="translate(300, 150)">
                        {/* Pen Tool Icon */}
                        <motion.circle
                            cx="0"
                            cy="0"
                            r="35"
                            fill="url(#secondaryGrad)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 }}
                        />
                        <path
                            d="M -10 -10 L -10 10 L 10 0 Z"
                            fill="white"
                            transform="rotate(-45)"
                        />
                        <motion.text
                            x="0"
                            y="50"
                            fontSize="12"
                            fill="#0010A3"
                            fontWeight="600"
                            textAnchor="middle"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            Design
                        </motion.text>
                    </g>
                </motion.g>

                {/* 2. Data Analytics - Top Right */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "300px 300px" }}
                >
                    <g transform="translate(430, 200)">
                        <motion.circle
                            cx="0"
                            cy="0"
                            r="35"
                            fill="url(#accentGrad1)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8 }}
                        />
                        {/* Bar Chart Icon */}
                        <rect x="-15" y="5" width="6" height="10" fill="white" />
                        <rect x="-5" y="-5" width="6" height="20" fill="white" />
                        <rect x="5" y="0" width="6" height="15" fill="white" />
                        <motion.text
                            x="0"
                            y="50"
                            fontSize="12"
                            fill="#10b981"
                            fontWeight="600"
                            textAnchor="middle"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        >
                            Data
                        </motion.text>
                    </g>
                </motion.g>

                {/* 3. Cloud Computing - Right */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "300px 300px" }}
                >
                    <g transform="translate(470, 300)">
                        <motion.circle
                            cx="0"
                            cy="0"
                            r="35"
                            fill="url(#accentGrad2)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1 }}
                        />
                        {/* Cloud Icon */}
                        <ellipse cx="-5" cy="0" rx="12" ry="8" fill="white" />
                        <ellipse cx="5" cy="0" rx="12" ry="8" fill="white" />
                        <rect x="-15" y="0" width="30" height="8" fill="white" rx="4" />
                        <motion.text
                            x="0"
                            y="50"
                            fontSize="12"
                            fill="#8b5cf6"
                            fontWeight="600"
                            textAnchor="middle"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                        >
                            Cloud
                        </motion.text>
                    </g>
                </motion.g>

                {/* 4. Web Development - Bottom Right */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "300px 300px" }}
                >
                    <g transform="translate(430, 400)">
                        <motion.circle
                            cx="0"
                            cy="0"
                            r="35"
                            fill="url(#primaryGrad)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2 }}
                        />
                        {/* Code Brackets */}
                        <text x="-8" y="8" fontSize="24" fill="white" fontWeight="bold">{"<>"}</text>
                        <motion.text
                            x="0"
                            y="50"
                            fontSize="12"
                            fill="#0010A3"
                            fontWeight="600"
                            textAnchor="middle"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                        >
                            Web Dev
                        </motion.text>
                    </g>
                </motion.g>

                {/* 5. Mobile Apps - Bottom */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "300px 300px" }}
                >
                    <g transform="translate(300, 450)">
                        <motion.circle
                            cx="0"
                            cy="0"
                            r="35"
                            fill="url(#secondaryGrad)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.4 }}
                        />
                        {/* Mobile Phone Icon */}
                        <rect x="-10" y="-15" width="20" height="30" rx="3" fill="white" />
                        <rect x="-8" y="-13" width="16" height="22" fill="#F67809" />
                        <circle cx="0" cy="12" r="2" fill="white" />
                        <motion.text
                            x="0"
                            y="50"
                            fontSize="12"
                            fill="#F67809"
                            fontWeight="600"
                            textAnchor="middle"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                        >
                            Mobile
                        </motion.text>
                    </g>
                </motion.g>

                {/* 6. Digital Marketing - Bottom Left */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 23, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "300px 300px" }}
                >
                    <g transform="translate(170, 400)">
                        <motion.circle
                            cx="0"
                            cy="0"
                            r="35"
                            fill="url(#accentGrad1)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.6 }}
                        />
                        {/* Megaphone Icon */}
                        <path d="M -10 -5 L 10 -10 L 10 10 L -10 5 Z" fill="white" />
                        <circle cx="-12" cy="0" r="4" fill="white" />
                        <motion.text
                            x="0"
                            y="50"
                            fontSize="12"
                            fill="#10b981"
                            fontWeight="600"
                            textAnchor="middle"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 23, repeat: Infinity, ease: "linear" }}
                        >
                            Marketing
                        </motion.text>
                    </g>
                </motion.g>

                {/* 7. Cybersecurity - Left */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 21, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "300px 300px" }}
                >
                    <g transform="translate(130, 300)">
                        <motion.circle
                            cx="0"
                            cy="0"
                            r="35"
                            fill="url(#accentGrad2)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.8 }}
                        />
                        {/* Shield Icon */}
                        <path d="M 0 -15 L 12 -10 L 12 5 Q 12 12 0 15 Q -12 12 -12 5 L -12 -10 Z" fill="white" />
                        <path d="M -6 0 L -2 6 L 8 -8" stroke="#8b5cf6" strokeWidth="2" fill="none" />
                        <motion.text
                            x="0"
                            y="50"
                            fontSize="12"
                            fill="#8b5cf6"
                            fontWeight="600"
                            textAnchor="middle"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 21, repeat: Infinity, ease: "linear" }}
                        >
                            Security
                        </motion.text>
                    </g>
                </motion.g>

                {/* 8. AI/ML - Top Left */}
                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "300px 300px" }}
                >
                    <g transform="translate(170, 200)">
                        <motion.circle
                            cx="0"
                            cy="0"
                            r="35"
                            fill="url(#primaryGrad)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2 }}
                        />
                        {/* Brain/AI Icon */}
                        <circle cx="-8" cy="-5" r="4" fill="white" />
                        <circle cx="8" cy="-5" r="4" fill="white" />
                        <circle cx="-8" cy="5" r="4" fill="white" />
                        <circle cx="8" cy="5" r="4" fill="white" />
                        <circle cx="0" cy="0" r="4" fill="white" />
                        <line x1="-8" y1="-5" x2="0" y2="0" stroke="white" strokeWidth="2" />
                        <line x1="8" y1="-5" x2="0" y2="0" stroke="white" strokeWidth="2" />
                        <line x1="-8" y1="5" x2="0" y2="0" stroke="white" strokeWidth="2" />
                        <line x1="8" y1="5" x2="0" y2="0" stroke="white" strokeWidth="2" />
                        <motion.text
                            x="0"
                            y="50"
                            fontSize="12"
                            fill="#0010A3"
                            fontWeight="600"
                            textAnchor="middle"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
                        >
                            AI/ML
                        </motion.text>
                    </g>
                </motion.g>

                {/* Connecting Lines - Animated */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <line x1="300" y1="300" x2="300" y2="185" stroke="url(#primaryGrad)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="300" y1="300" x2="395" y2="235" stroke="url(#accentGrad1)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="300" y1="300" x2="435" y2="300" stroke="url(#accentGrad2)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="300" y1="300" x2="395" y2="365" stroke="url(#primaryGrad)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="300" y1="300" x2="300" y2="415" stroke="url(#secondaryGrad)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="300" y1="300" x2="205" y2="365" stroke="url(#accentGrad1)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="300" y1="300" x2="165" y2="300" stroke="url(#accentGrad2)" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="300" y1="300" x2="205" y2="235" stroke="url(#primaryGrad)" strokeWidth="2" strokeDasharray="5,5" />
                </motion.g>

                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx={150 + Math.random() * 300}
                        cy={150 + Math.random() * 300}
                        r="3"
                        fill={["#0010A3", "#F67809", "#10b981", "#8b5cf6"][i % 4]}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0.5, 1.5, 0.5],
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Pulsing Rings */}
                <motion.circle
                    cx="300"
                    cy="300"
                    r="60"
                    fill="none"
                    stroke="url(#primaryGrad)"
                    strokeWidth="2"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle
                    cx="300"
                    cy="300"
                    r="60"
                    fill="none"
                    stroke="url(#secondaryGrad)"
                    strokeWidth="2"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                />
            </svg>
        </div>
    );
};

export default AnimatedTechHero;
