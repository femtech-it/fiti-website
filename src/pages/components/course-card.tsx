import { MdEditCalendar } from "react-icons/md";
import {Button} from "antd"



const CourseCard = () => {
  return (
    <div className="relative w-[300px] h-[500px]  ">
        <div className="w-[300px] h-[500px] bg-white shadow-xl absolute overflow-hidden right-[50px] top-[-20px] rounded-br-2xl rounded-tl-2xl flex flex-col">
            <div className="w-[100%] h-[200px] overflow-hidden">
                <img src="/assets/w2.jpg" alt="" className="w-[100%]"/>
            </div>
            <div className="p-3 flex flex-col gap-3 justify-between flex-1">
                <h1 className="text-2xl">Web Design and Application Development (Laravel)</h1>
                <div className="flex items-center gap-2">
                    <MdEditCalendar /> 
                    <h1>12 weeks</h1>
                </div>
                <h1 className="text-3xl font-bold">&#8358;{Intl.NumberFormat().format(150000)}</h1>
                <Button>Enroll</Button>
            </div>
        </div>
        <div className="w-[300px] h-[500px] bg-primary rounded-xl flex justify-center items-start courseCard-down p-2">
            <h1 className="transform-[rotate(180deg)] text-3xl font-bold text-white">WEB DESIGN AND APP DEV</h1>
        </div>
    </div>
  )
}

export default CourseCard