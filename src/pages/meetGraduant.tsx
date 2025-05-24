import Graduatecard from "./components/graduate-card"

const MeetGraduant = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-no-repeat mt-[70px] gap-[50px] bg-cover">
      <div className="flex flex-col  justify-center">
      <img src="/assets/granduant2.png" alt="" />
      <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px]">MEET OUR TOP GRADUATES</button>
      </div>
<p className="text-center"  >
Here are some of our outstanding graduates who have gone above and beyond in their training. These individuals <br /> have been handpicked based on their performance, dedication, and skill level.
</p>

<div>
        <div className="grid grid-cols-3 gap-20 ">
          {[...Array(15)].map((_, index) => (
            <Graduatecard key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetGraduant
