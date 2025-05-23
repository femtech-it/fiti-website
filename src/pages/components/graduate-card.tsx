const Graduatecard = () => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg shadow-lg p-5 max-w-[300px] mx-auto item-center justify-center bg-primary text-[white]">
      <div className="flex justify-center items-center">
        <img src="../assets/graduant.png" alt="" />
      </div>
      <div className="flex flex-col item-center justify-center gap-[20px] text-center text-[20px] font-extralight">
        <h1 className="text-[30px] font-semibold">Tiaraoluwa Aremu</h1>
        <p>Data Analyst | SQL</p>
        <p>Proficiency in SQL and Excel <br /> Proficiency in SQL and Excel</p>
      </div>
      <div className="flex item-center justify-center gap-[10px]">
        <button className="px-4 py-1 bg-[white] text-[black] border-1 rounded-full border-[#F67809] hover:bg-[#F67809] hover:border-[white] hover:text-white cursor-pointer">View Portfolio</button>
        <button className="px-4 py-1 bg-[#F67809] text-[white] border-1 rounded-full border-[white]  hover:bg-[white] hover:border-[#F67809] hover:text-black cursor-pointer">Request CV</button>

      </div>
    </div>
  )
}

export default Graduatecard
