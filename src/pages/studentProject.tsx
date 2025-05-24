const StudentProject = () => {

  const studentProjects = [
    {
      title: 'SavedUp - A Micro-Investment app for Students.',
      description: 'A UI/UX case study on financial planning for students',
      author: 'Tiaraoluwa Olowopo',
      image: '/assets/student1.png',
    },
    {
      title: 'SavedUp - A Micro-Investment app for Students.',
      description: 'A UI/UX case study on financial planning for students',
      author: 'Tiaraoluwa Olowopo',
      image: '/assets/student2.png',
    },

    {
      title: 'FitTrack - A Health and Fitness App.',
      description: 'UX case study on fitness tracking for beginners',
      author: 'Aisha Lawal',
      image: '/assets/student3.png',
    },
    {
      title: 'AgroLink - A Platform for Farmers.',
      description: 'Designing for rural engagement and supply chains',
      author: 'Samuel Ojo',
      image: '/assets/student4.png',
    },
    {
      title: 'ShopSmart - Smart Grocery Planning.',
      description: 'Helping users budget and manage groceries efficiently',
      author: 'Grace Eze',
      image: '/assets/student5.png',
    },
    {
      title: 'CampusConnect - Social Networking for Students.',
      description: 'UX case for improving campus community engagement',
      author: 'Emeka Nwosu',
      image: '/assets/student6.png',
    },
  ];


  return (
    <section className="min-h-screen flex justify-center items-center gap-5 flex-col mt-[100px]">
      <div>
        <div>
          <img src="../assets/studentimg.png" alt="" />
          <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px]">STUDENTS’ PROJECT</button>
        </div>
        <div>
          <small className="flex items-center justify-center mt-[20px]">Showcasing innovation, creativity, and tech skills from our talented students!</small>
        </div>
        <h1 className="flex items-center justify-center mt-[20px] text-black text-[30px]">Latest Students Projects</h1>
      </div>
      <div className="space-y-16">
        {studentProjects.map((project, index) => (
          <div
            key={index}
            className={` mb-[30px] flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-[20px]`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt="Project"
                className="rounded-lg shadow-lg w-full"
              />
            </div>


            {/* Text */}
            <div className="w-full md:w-1/2 md:text-left space-y-4 m-0 p-0">
              <h3 className="text-2xl font-bold ">{project.title}</h3>
              <p className="text-gray-700 ">{project.description}</p>
              <p className="text-sm text-gray-500 ">By: {project.author}</p>
              <div className="flex items-center justify-center">
                <button className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 flex items-center justify-center">
                  View Project
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>




    </section>
  )
}

export default StudentProject
