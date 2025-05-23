const Photogallery = () => {
  const DisplayFirstImg = {
    img: "../assets/galleryImg.png",
  }
  const DisplaySecondImg = {
    img: "../assets/studentImg2.png",
  }

  const repeatedIMG = Array.from({ length: 16 }, () => DisplayFirstImg);
  const repeatedSecondIMG = Array.from({ length: 16 }, () => DisplaySecondImg);

  return (
    <section >
      <div className="min-h-screen flex flex-col items-center justify-center bg-no-repeat mt-[60px]">
        <img src="/assets/gallery_img.png" alt="" />
        <button className="bg-primary py-[8px] w-[550px]  rounded-tl-[20px] rounded-br-[20px] text-white font-sans text-[36px] font-bold mx-[360px] shadow-md mt-[-30px]">PHOTO GALLERY</button>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-[40px]">Training Sessions</h1>
        <div className="grid grid-cols-4  max-w-5xl mx-auto mt-[50px] gap-[10px] place-items-center justify-items-center">
          {repeatedIMG.map((item, index) => (
            <div className="" key={index}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
        <button className="bg-orange-500 text-white py-3 px-18 rounded-lg hover:bg-orange-600 flex items-center justify-center my-[50px]">View More</button>

      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-[40px]">Event and Workshop</h1>
        <div className="grid grid-cols-4  max-w-5xl mx-auto mt-[50px] gap-[10px] place-items-center justify-items-center">
          {repeatedSecondIMG.map((item, index) => (
            <div className="" key={index}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
        <button className="bg-orange-500 text-white py-3 px-18 rounded-lg hover:bg-orange-600 flex items-center justify-center my-[50px]">View More</button>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
     <h1 className="text-[40px]">Submit Your Pictures  </h1>
     <p >Have photos from a FEMTECH event or project? Upload them to be featured in our gallery!</p>
     <button className="bg-orange-500 text-white py-3 px-18 rounded-lg hover:bg-orange-600 flex items-center justify-center ">Upload Photos</button>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 mt-[50px]">
        <h1  className="text-[40px]">Take a virtual tour of our training center</h1>
        <p>A behind-the-scenes look at our classrooms, labs, and student workspaces</p>
        <div className="max-w-5xl mx-auto">
        <iframe width="1240" height="798.478515625" src="https://www.youtube.com/embed/s0op1fBWXyY?si=x5rlCIGZawU9QUSI" title="YouTube video player"   frameBorder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-[1000px]"></iframe>
        </div>
        <div className="flex flex-col items-center justify-center gap-7 mt-[50px]">
        <h1  className="text-[40px]">Watch all our latest videos on YouTube!</h1>
        <div >
        <iframe width="1240" height="798.478515625" src="https://www.youtube.com/embed/5_DAfHWPiLs?si=2xzNokqDrygUcyhN" title="YouTube video player"   frameBorder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Photogallery
