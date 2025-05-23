import Team from "./components/team"

const about = () => {
  const opions = [
    {

      text: "Free Training Kit",
      image: "../assets/noteicon.png"
    },

    {
      text: "State-of-the-Art Infrastructure  with Smart Classrooms",
      image: "../assets/noteicon.png"
    },

    {
      text: " Free Internet Access",
      image: "../assets/noteicon.png"
    }
    ,

    {
      text: " Flexible Schedule",
      image: "../assets/noteicon.png"
    }

  ]

  const rightoptiobnn = [
    {

      text: "Government-Approved Certification",
      image: "../assets/noteicon.png"
    },
    {
      text: "Accredited Training Programs",
      image: "../assets/noteicon.png"
    },
    {
      text: " Conducive Learning Environment",
      image: "../assets/noteicon.png"
    }
    ,
    {
      text: " Experienced and Seasoned Instructors",
      image: "../assets/noteicon.png"
    }

  ]
  const partnerImg = [
    { img: "../assets/actd-icons.png" },
    { img: "../assets/seedingafrica.png" },
    { img: "../assets/comptialogo.png" },
    { img: "../assets/wtec.png" },
    { img: "../assets/abubakar1.png" },
    { img: "../assets/academy.png" },
  
  ]
  return (
    <section className="min-h-screen relative flex flex-col mt-[100px]">
      <img src="/assets/aboutuspic.png"  />
      <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px] mb-[20px]">ABOUT US</button>
      <p className="mx-20">FEMTECH Information Technology Training Centre (FITI) is a subsidiary of FEMTECH Information Technology Limited, a one-stop IT solutions company incorporated in 2002 with the Corporate Affairs Commission (CAC). The company specializes in the sales, repair, and maintenance of gadgets, renewable energy solutions, ICT training, and consultation.
      </p>
      <p className="mx-20 text-justify">At FITI, we are dedicated to bridging the digital skills gap in Nigeria and Africa. We offer a wide range of training programs in various fields, including software development, data science, digital marketing, and more. Our courses are designed to be practical and hands-on, ensuring that our students gain real-world experience and knowledge that can be applied immediately in their careers.
        FITI was established in 2012 with the core mission of providing effective ICT training for career development. We are committed to equipping youths, professionals, business owners, and corps members with digital skills that enhance their career prospects, improve business efficiency, and give them a competitive edge in the evolving digital world.
        Beyond technical skills, FITI also provides mentorship and soft skills training, preparing students for the realities of the digital workforce, including remote work, entrepreneurship, and freelancing.</p>
  


      <main>
        <h1 className="text-black text-[40px] text-center my-[30px]">Why Choose Us.</h1>
        <p className="mx-20 text-justify">At FEMTECH Training Institute, we are committed to providing a top-notch learning experience with industry-relevant skills and a supportive environment. Our programs are designed to equip you with practical knowledge and hands-on training, ensuring you stay ahead in the tech industry. Here's what sets us apart:</p>

        <div className="flex gap-10 justify-center mt-[50px]">
          <div className="flex flex-col gap-[30px] max-w-[350px] ">
            {opions.map((option, index) => (
              <div key={index} className="flex justify-end items-center w-full max-w-md p-4  rounded-md gap-[50px]">
                <p className="text-base text-right">{option.text}</p>
                <img src={option.image} className="" />

              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[30px] max-w-[330px] ">
            {rightoptiobnn.map((options, index) => (
              <div key={index} className="flex justify-end items-center w-full max-w-md p-4  rounded-md gap-[50px]">
                <img src={options.image} />
                <p className="text-base text-left">{options.text}</p>


              </div>
            ))}
          </div>
        </div>
      </main>
      <div>
        <h1 className="text-black text-[40px] text-center my-[30px]">Our Partners</h1>
        <p className="mx-20 text-justify mb-[30px]">FITI collaborates with industry leaders, corporate organizations, government agencies, and NGOs to expand access to quality ICT training. Our key partners include:</p>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partnerImg.map((ImG, index) => {
            if (index < 6) {
              return (
                <div key={index} className="  rounded text-center">
                  <img src={ImG.img} alt="" className="mx-auto" />
                </div>
              );
            }
            return null;
          })}
          <div className="col-span-3 flex justify-center gap-6">
            {partnerImg[6] && (
              <div className="w-full max-w-[calc(33.333%-1rem)]  rounded text-center  ">
                <img src={partnerImg[6].img} alt="" className="mx-auto" />
              </div>
            )}
            {partnerImg[7] && (
              <div className="w-full max-w-[calc(33.333%-1rem)]  rounded text-center">
                <img src={partnerImg[7].img} alt="" className="mx-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
      <Team />
      <div className="bg-[image:url(/assets/rect.png)] mt-[70px] bg-no-repeat bg-cover ">
        <h1 className="text-black text-[40px] text-center my-[30px]">Career at FEMTECH Training</h1>
        <div className="flex items-center mx-auto justify-center gap-[20px]">
          <div>
            <p className="text-left">Join our team of innovators and educators shaping the future  <br />of
              tech! At FEMTECH Training, we are always looking for passionate <br />
              professionals eager to inspire and equip the next generation with <br />
              industry-relevant skills.</p>
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center justify-start gap-[20px] mt-[20px]">
                <img src="../assets/noteicon.png" alt="" />
                <p>Dynamic and collaborative work  environment</p>
              </div>
              <div className="flex items-center justify-start gap-[20px] mt-[20px]">
                <img src="../assets/noteicon.png" alt="" />
                <p>Oppourtunities for Professional Growth</p>
              </div>
              <div className="flex items-center justify-start gap-[20px] mt-[20px]">
                <img src="../assets/noteicon.png" alt="" />
                <p>Competitive benefits and flexible work arrangement</p>
              </div>
            </div>
          </div>
          <div className="mt-[150px]">
            <img src="../assets/woman.png" alt="" className="w-[]" />
          </div>
        </div>
        <div className="flex items-center justify-center my-[50px]">
          <button className="bg-secondary px-10 py-2 rounded-xl text-white " >See Open Roles</button>
        </div>
      </div>
    
    </section>
  )


}

export default about
