import { Button } from "antd"


const Homepage = () => {
  return (
    <section className="min-h-screen bg-[image:url(/assets/fiti_bg.jpg)] bg-center bg-cover flex justify-around items-center">
      <div className="flex flex-col gap-5 md:w-[500px]">
        <h1 className="md:text-6xl font-bold ">Empowering you with Skills to Thrive in Tech</h1>
        <p>Providing hands-on tech training that equips you with the skills to excel in today's digital word</p>
        <div className="flex justify-start gap-10 items-center flex-wrap">
          <Button>Enroll</Button>
          <Button>Chat with an advisors</Button>
        </div>
      </div>
      <div>
        <img src="/assets/heroImg.png" alt="" className="md:w-[400px]" />
      </div>

    </section>
  )
}

export default Homepage