import { Button } from "antd"
const Contactus = () => {
  return (
    <section className="min-h-screen flex justify-center items-center  mt-[100px] ">
      <div className="">
        <div className="flex justify-center items-center">
          <div>

            <img src="../assets/contact-us.png" alt="" />
            <button className="bg-primary py-[8px] px-[200px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px]">CONTACT US</button>
          </div>
        </div>
        <div>
          <h1 className="text-black text-[40px] text-center my-[30px]">We're Here to Help!</h1>
          <p className="mx-20 text-justify">Have questions about our training programs, enrollment, or partnership opportunities? Our team is ready to assist you. Reach out to us through any of the following channels:</p>
          <p className="mx-20 text-justify mt-[10px]" >Fill out the form below, and we’ll get back to you as soon as possible</p>
        </div>
        <div className="">
          <div>
            <label htmlFor="name" className="block text-sm font-medium  ml-[80px] mt-[20px]">Full Name :</label>
            <input
              type="text"
              className="px-[10px] border-none rounded-lg w-[1200px] py-2 focus:outline-none focus:none mx-[80px] mt-[10px] shadow focus:shadow-lg"
            />
          </div>
          <div className="flex gap-[33px]">
            <div>
              <label htmlFor="name" className="block text-sm font-medium  ml-[80px] mt-[20px] ">Email :</label>
              <input
                type="text"
                className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg "
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium  mt-[20px]">Phone No :</label>
              <input
                type="text"
                className="px-[10px] border-none rounded-lg w-[585px] py-2 focus:outline-none focus:none ml-[80px] mt-[10px] shadow focus:shadow-lg  "
              />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium  ml-[80px] my-[20px]">Message :</label>
            <textarea name="" id="" className="align-top border-none rounded-lg w-[1205px] h-[508.8330078125px]  focus:outline-none focus:none ml-[80px]  shadow px-[10px]  focus:shadow-lg">

            </textarea>

          </div>
          <div className="flex justify-center items-center mt-[20px]">

            <Button style={{ background: "#F67809", color: "white", paddingBlock: "20px", paddingInline: "60px", borderRadius: "10px", }}>Submit</Button>
          </div>
        </div>

        <h1 className="text-black text-[40px] text-center my-[30px] mt-[50px]" >Where to find Us</h1>

        <div className="flex justify-center items-center gap-[40px]">
          <div className="w-[585px] h-[500px] bg-[#D9D9D9] rounded-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1895275855363!2d4.634178573500876!3d8.480944397330106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364c98504505c1%3A0xbc7efb5616914b29!2s28%20University%20Rd%2C%20Akanbi-1v%20240102%2C%20Kwara!5e0!3m2!1sen!2sng!4v1747137397034!5m2!1sen!2sng" width="585px" height="500px" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="w-[585px] h-[500px] bg-[#D9D9D9] rounded-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7371.536670746189!2d4.547938709986998!3d8.483617607695157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10365296fffcd2ef%3A0xfb07be14b3f123c!2sopp.%20GTBank!5e0!3m2!1sen!2sng!4v1747136939024!5m2!1sen!2sng" width="585px" height="500px" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
        <div className="flex justify-center items-center gap-[40px] mt-[40px]">
          <div className="w-[585px] h-[293.02px] bg-[#D9D9D9] rounded-md flex flex-col justify-center items-center gap-[10px]">
            <img src="../assets/location.png" alt="" />
            <p className="text-center">28, University Road, Tanke. Ilorin <br />fiti@femtechtraining.com <br />+(234) 705-996-1675</p>
          </div>
          <div className="w-[585px] h-[293.02px] bg-[#D9D9D9] rounded-md flex flex-col justify-center items-center gap-[10px]">
            <img src="../assets/location.png" alt="" />
            <p className="text-center">158, Ibrahim Taiwo Road, Opposite Femtech PC Clinic Ilorin<br />fiti@femtechtraining.com <br />+(234) 705-996-1675</p>
          </div>




        </div>


      </div>
    </section>
  )
}

export default Contactus
