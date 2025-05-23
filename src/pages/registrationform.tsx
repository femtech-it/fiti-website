
const Registrationform = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center ">
        <img src="/assets/registartion_Img.png" alt="" className="h-screen w-screen bg-cover bg-center bg-no-repeat" />
        <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px]">REGISTRATION FORM</button>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 mt-[50px]">

        <p className="text-center  px-[200px] text-[20px] text-gray-700 ">You're just a few steps away from joining hundreds of students building real tech skills at FEMTECH! <br /> Fill out the form below to register for your preferred training program. <br /> Whether you're starting from scratch or leveling up, we’ve got a place for you.</p>
        <p className=" mt-[20px] text-black text-[30px] font-bold">Let’s get you started — your future in tech begins here!</p>
      </div>
      <div>

        <div className="">
          <p className="text-left text-[20px] mx-[80px] my-[40px] font-medium">Personal Information</p>
          <form action="" className="flex flex-col items-center justify-center gap-[70px] mt-[50px]">
            <div>
              <label htmlFor="" className="block text-sm font-semibold  ml-[80px] mt-[20px]">Full Name :</label>
              <input type="text"
                placeholder="Enter full name"
                className="px-[10px] border-none rounded-lg w-[1200px] py-2 focus:outline-none focus:none mx-[80px] mt-[10px] shadow focus:shadow-lg"
              />
            </div>

            <div className="flex gap-[33px] ">
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="name" className="block text-sm font-semibold  ml-[80px] mt-[20px] ">Email :</label>
                <input
                  type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg "
                  placeholder="Enter email"
                />
              </div>
              <div className="flex flex-col gap-[10px] items-baseline">
                <label htmlFor="name" className="block text-sm font-semibold  mt-[20px]">Phone No :</label>
                <input
                  type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"
                  placeholder="Enter phone no"
                />
              </div>
            </div>
            <div className="flex gap-[33px] items-center justify-center">
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="name" className="block text-sm font-semibold  ml-[80px] mt-[20px] ">Date of Birth :</label>
                <input
                  type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg "
                />
              </div>
              <div className="flex flex-col gap-[10px] items-baseline">
                <label htmlFor="name" className="block text-sm font-semibold  mt-[20px]">Gender :</label>
                <input
                  type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"
                  placeholder="Gender"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-semibold  ml-[80px] mt-[20px]">Residential Address</label>
              <input type="text"
                className="px-[10px] border-none rounded-lg w-[1200px] py-2 focus:outline-none focus:none mx-[80px] mt-[10px] shadow focus:shadow-lg"
              />
            </div>
            <div className="flex gap-[33px] flex-col ">
              <div className="ml-[-685px] ">
                <label htmlFor="" className="block text-sm font-semibold  ml-[80px] mt-[20px]">Relationship</label>
                <input type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="">
          <p className="text-left text-[20px] mx-[80px] my-[40px] font-medium">Emergency Contact</p>
          <div className="flex flex-col items-center justify-center gap-[70px] mt-[50px]">
            <div>
              <label htmlFor="" className="block text-sm font-semibold  ml-[80px] mt-[20px]">Full Name :</label>
              <input type="text"
                placeholder="Enter full name"
                className="px-[10px] border-none rounded-lg w-[1200px] py-2 focus:outline-none focus:none mx-[80px] mt-[10px] shadow focus:shadow-lg"
              />
            </div>

            <div className="flex gap-[33px] ">
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="name" className="block text-sm font-semibold  ml-[80px] mt-[20px] ">Email :</label>
                <input
                  type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg "
                  placeholder="Enter email"
                />
              </div>
              <div className="flex flex-col gap-[10px] items-baseline">
                <label htmlFor="name" className="block text-sm font-semibold  mt-[20px]">Phone No :</label>
                <input
                  type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"
                  placeholder="Enter phone no"
                />
              </div>
            </div>
            <div className="flex gap-[33px] items-center justify-center">
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="name" className="block text-sm font-semibold  ml-[80px] mt-[20px] ">Date of Birth :</label>
                <input
                  type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg "
                />
              </div>
              <div className="flex flex-col gap-[10px] items-baseline">
                <label htmlFor="name" className="block text-sm font-semibold  mt-[20px]">Gender :</label>
                <input
                  type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"
                  placeholder="Gender"
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-semibold  ml-[80px] mt-[20px]">Residential Address</label>
              <input type="text"
                className="px-[10px] border-none rounded-lg w-[1200px] py-2 focus:outline-none focus:none mx-[80px] mt-[10px] shadow focus:shadow-lg"
              />
            </div>
            <div className="flex gap-[33px] flex-col ">
              <div className="ml-[-685px] ">
                <label htmlFor="" className="block text-sm font-semibold  ml-[80px] mt-[20px]">Relationship</label>
                <input type="text"
                  className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col ">
            <p className="text-left text-[20px] mx-[80px] my-[40px] font-medium mt-[60px]">Educational Background</p>

            <div className="mb-[20px]">
              <label htmlFor="" className="block text-sm font-semibold  ml-[80px] ">Highest Academic Qualification</label>
              <input type="text"
                className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"
              />
            </div>
            <div className="my-[50px]">
              <label htmlFor="" className="block text-sm font-semibold  ml-[80px] ">Current Occupation / Status</label>
              <input type="text"
                className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"
              />
            </div>






            <div className="">
              <p className="text-left text-[20px] mx-[80px] my-[40px] font-medium">Course and Training Details</p>
              <div className="flex flex-col items-center justify-center gap-[70px] mt-[50px]">


                <div>
                  <label htmlFor="" className="block text-sm font-semibold  ml-[80px] mt-[20px]">Course of Interest</label>
                  <input type="text"

                    className="px-[10px] border-none rounded-lg w-[1200px] py-2 focus:outline-none focus:none mx-[80px] mt-[10px] shadow focus:shadow-lg"
                  />
                </div>

                <div className="flex gap-[33px] ">
                  <div className="flex flex-col gap-[10px]">
                    <label htmlFor="name" className="block text-sm font-semibold  ml-[80px] mt-[20px] ">Training Branch Choice</label>
                    <input
                      type="text"
                      className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg "

                    />
                  </div>
                  <div className="flex flex-col gap-[10px] items-baseline">
                    <label htmlFor="name" className="block text-sm font-semibold  mt-[20px]">Preferred Training Mode</label>
                    <input
                      type="text"
                      className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg"

                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="" className="block text-sm font-semibold  ml-[80px] mt-[20px]">How did you hear about FEMTECH Training Centre ?</label>
                  <input type="text"
                    className="px-[10px] border-none rounded-lg w-[1200px] py-2 focus:outline-none focus:none mx-[80px] mt-[10px] shadow focus:shadow-lg"
                  />
                </div>
              </div>
            </div>
            <p className="text-left text-[20px] mx-[80px] mt-[60px] font-medium">Document Upload</p>
            <p className="text-left text-[20px] mx-[80px] my-[10px]">Passport Photograph <br /> (Upload clear headshot – JPEG/PNG, max 2MB)</p>
            <input type="text"
              className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg" />

          </div>



        </div>
        <div className="flex flex-col justify-center items-center my-[50px]">

        <button className="bg-orange-500 text-white py-3 px-18 rounded-lg hover:bg-orange-600 flex items-center justify-center ">Submit</button>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start gap-[10px] my-[50px]">
      <p className="font-semibold">Agreement and Submission</p>
      <p>[_ ] I confirm that the information provided is accurate to the best of my knowledge. I agree to abide by the rules and ethics of FEMTECH Training Centre.</p>
      <p className="font-semibold">Students are advised to read FEMTECH Terms and Conditions in order to be fully informed about standards and policies of the institute. </p>
      </div>
    </section>
  )
}

export default Registrationform
