
const Team = () => {
const teamMembers = {
  name: "Aina Faruk",
  description: "With 8 years of experience in UI/UX Design, Faruk specializes in Designs. As a dedicated mentor at FEMTECH Training, He equips students with hands-on, industry-relevant skills.",
  image: "../assets/faruq.png",
}
const repeated = Array.from({ length: 9 }, () => teamMembers);

  return (
    <section>
      <h1 className="text-black text-[40px] text-center my-[30px]">Our Team</h1>
      <p className="mx-20 text-justify">Our instructors at FEMTECH Training are seasoned professionals with extensive industry experience and a passion for teaching. They bring real-world expertise, hands-on training, and mentorship to equip students with the skills needed to excel in the tech industry</p>
<div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto mt-[50px]">
    {repeated.map((item, index) => (
      <div key={index} >
        <img src={item.image} alt="" />
        <h1 className="rounded text-center p-1 text-[30px]">{item.name}</h1>
        <p className="rounded text-left p-1">{item.description}</p>
      </div>
    ))}
    </div>


    </section>
  )
}

export default Team
