export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export const DEFAULT_SEO = {
  siteName: "FITI - FEMTECH Information Technology Training Centre",
  siteUrl: "https://www.fiti.ng", 
  defaultTitle: "FITI - Empowering You with Tech Skills | Premier IT Training in Nigeria",
  defaultDescription: "FITI offers hands-on tech training in software development, data science, digital marketing, and more. Government-approved certification, experienced instructors, and flexible schedules in Nigeria.",
  defaultKeywords: "IT training Nigeria, tech training, software development courses, data science training, digital marketing, FITI, FEMTECH, ICT training, coding bootcamp Nigeria, tech skills",
  defaultOgImage: "/assets/fiti_bg.jpg", // Update with your social sharing image
  twitterHandle: "@FITI_Nigeria", // Update with your actual Twitter handle
  facebookAppId: "", // Add if you have one
  organizationName: "FEMTECH Information Technology Training Centre",
  organizationLogo: "/assets/logo.png", // Update with your actual logo path
  contactEmail: "info@fiti.ng",
  contactPhone: "+234-XXX-XXX-XXXX", // Update with actual phone
  address: {
    streetAddress: "", // Add your street address
    addressLocality: "", // Add your city
    addressRegion: "", // Add your state
    postalCode: "", // Add postal code
    addressCountry: "NG"
  }
};

export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: "FITI - Empowering You with Tech Skills | Premier IT Training in Nigeria",
    description: "Transform your career with FITI's hands-on tech training. Learn software development, data science, digital marketing & more. Government-approved certification, expert instructors, flexible schedules.",
    keywords: "IT training Nigeria, tech training, software development courses, data science training, digital marketing, FITI, FEMTECH, ICT training, coding bootcamp Nigeria, tech certification",
    ogImage: "/assets/fiti_bg.jpg"
  },
  about: {
    title: "About FITI - Leading IT Training Institute Since 2012 | FEMTECH",
    description: "Learn about FITI, a subsidiary of FEMTECH IT Limited established in 2012. We bridge the digital skills gap in Nigeria with government-approved ICT training, experienced instructors, and state-of-the-art facilities.",
    keywords: "about FITI, FEMTECH training, IT institute Nigeria, tech training history, government approved training, ICT certification Nigeria",
    ogImage: "/assets/aboutuspic.png"
  },
  courses: {
    title: "IT Training Courses - Software Development, Data Science & More | FITI",
    description: "Explore FITI's comprehensive IT training courses including software development, data science, digital marketing, cybersecurity, and more. Hands-on training with industry-relevant skills and certification.",
    keywords: "IT courses Nigeria, software development training, data science courses, digital marketing training, cybersecurity courses, web development, mobile app development, FITI courses",
    ogImage: "/assets/fiti_bg.jpg"
  },
  contact: {
    title: "Contact FITI - Get in Touch with Our Training Advisors",
    description: "Have questions about our IT training programs? Contact FITI today. Our advisors are ready to help you choose the right course and start your tech career journey.",
    keywords: "contact FITI, IT training inquiry, tech course information, FITI location, training advisor, enrollment support",
    ogImage: "/assets/fiti_bg.jpg"
  },
  registration: {
    title: "Enroll Now - Start Your Tech Career Journey | FITI",
    description: "Ready to transform your career? Enroll in FITI's IT training programs today. Fill out our registration form and take the first step towards mastering in-demand tech skills.",
    keywords: "FITI enrollment, register for IT training, tech course registration, join FITI, IT training signup Nigeria",
    noindex: false 
  },
  resources: {
    title: "Learning Resources - Free Tech Guides & Materials | FITI",
    description: "Access free learning resources, tech guides, tutorials, and materials from FITI. Enhance your IT skills with our curated educational content.",
    keywords: "IT learning resources, tech tutorials, free tech guides, programming resources, FITI materials, tech education",
    ogImage: "/assets/fiti_bg.jpg"
  },
  studentProjects: {
    title: "Student Projects - Showcase of FITI Graduate Work",
    description: "Explore impressive projects created by FITI students. See real-world applications built during our hands-on IT training programs.",
    keywords: "FITI student projects, tech portfolio, graduate work, student showcase, IT training results, coding projects",
    ogImage: "/assets/fiti_bg.jpg"
  },
  gallery: {
    title: "Photo Gallery - FITI Training Facilities & Student Life",
    description: "View photos of FITI's state-of-the-art training facilities, smart classrooms, student activities, and learning environment.",
    keywords: "FITI gallery, training facilities, classroom photos, student life, IT training center, FITI campus",
    ogImage: "/assets/fiti_bg.jpg"
  },
  hireGraduate: {
    title: "Hire Our Graduates - Skilled Tech Talent for Your Business | FITI",
    description: "Looking for skilled tech talent? Hire FITI graduates trained in software development, data science, digital marketing, and more. Access a pool of job-ready IT professionals.",
    keywords: "hire tech talent, FITI graduates, IT recruitment, skilled developers, tech hiring Nigeria, trained IT professionals",
    ogImage: "/assets/fiti_bg.jpg"
  },
  meetGraduates: {
    title: "Meet Our Graduates - Success Stories from FITI Alumni",
    description: "Meet successful FITI graduates who have transformed their careers through our IT training programs. Read their stories and see where they are now.",
    keywords: "FITI alumni, graduate success stories, tech career transformation, FITI testimonials, training outcomes",
    ogImage: "/assets/fiti_bg.jpg"
  },
  curriculum: {
    title: "Course Curriculum - Detailed IT Training Programs | FITI",
    description: "Explore detailed curriculum for FITI's IT training programs. Learn what you'll study, skills you'll gain, and how our courses prepare you for tech careers.",
    keywords: "IT course curriculum, training syllabus, course outline, FITI programs, tech training content, learning path",
    ogImage: "/assets/fiti_bg.jpg"
  },
  terms: {
    title: "Terms and Conditions - FITI Training Institute",
    description: "Read the terms and conditions for enrolling in FITI's IT training programs. Understand our policies, student responsibilities, and program guidelines.",
    keywords: "FITI terms, training conditions, enrollment policy, student guidelines, program terms",
    noindex: true
  }
};
