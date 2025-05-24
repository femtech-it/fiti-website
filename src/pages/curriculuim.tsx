
const Curriculuim = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        <div className="min-h-screen flex justify-center items-center gap-5 flex-col mt-[100px] bg-[image:url(/assets/d_curriculum.png)] bg-cover] w-screen bg-cover bg-center bg-no-repeat">
        </div>
        <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px]">DOWNLOAD CURRICULUM</button>
        <p className="text-center my-[50px]">
          Interested in learning what we teach at FEMTECH? <br /> Get a free copy of our updated course syllabus for any of our training programs. <br /> Just fill out the form below and your syllabus will be delivered instantly to your inbox.
        </p>
        <form action="" className="flex flex-col items-center justify-center gap-[70px] mt-[50px]">
          <div>
            <label htmlFor="" className="block text-sm font-semibold  ml-[80px] mt-[20px]">Full Name :</label>
            <input type="text"
              placeholder="Enter full name"
              className="px-[10px] border-none rounded-lg w-[1200px] py-2 focus:outline-none focus:none mx-[80px] mt-[10px] shadow focus:shadow-lg"
            />
          </div>

          <div className="flex gap-[20px] ">
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="name" className="block text-sm font-semibold  ml-[80px]  ">Email :</label>
              <input
                type="text"
                className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg "
              />
            </div>
            <div className="flex flex-col gap-[10px] items-baseline">
              <label htmlFor="name" className="block text-sm font-semibold">Phone No :</label>
              <input
                type="text"
                className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="block text-sm font-semibold  ml-[80px] ">Why are you downloading the Syllabus ?</label>
            <input type="text"
              className="px-[10px] border-none rounded-lg w-[1200px] py-2 focus:outline-none focus:none mx-[80px] mt-[10px] shadow focus:shadow-lg"
            />
          </div>
        </form>
        <div className="text-left flex flex-col justify-between items-start ml-[70px] my-[50px]">
          <div>
          <p className="font-semibold ">Consent </p>
          <p> [ ] I agree to receive communication from FEMTECH Training Centre about upcoming programs, discounts, and events.</p>
        </div>
      </div>
        </div>
        <div>
        <button className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 flex items-center justify-center my-[50px]">Download Now</button>
        </div>
    </section>
  )
}

export default Curriculuim
