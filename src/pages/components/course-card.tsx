import { MdEditCalendar } from "react-icons/md";
import { Button } from "antd"

interface CourseCardProps {
    name: string;
    description: string;
    price: number;
    duration: number;
}

const CourseCard = ({ name, price, duration }: CourseCardProps) => {
    return (
        <div className="relative w-[300px] h-[500px]">
            <div className="w-[300px] h-[500px] bg-white shadow-xl absolute overflow-hidden right-[50px] top-[-20px] rounded-br-2xl rounded-tl-2xl flex flex-col z-10">
                <div className="w-[100%] h-[200px] overflow-hidden">
                    <img src="/assets/w2.jpg" alt={name} className="w-[100%] h-full object-cover" />
                </div>
                <div className="p-3 flex flex-col gap-3 justify-between flex-1">
                    <h1 className="text-2xl font-bold leading-tight line-clamp-2" title={name}>{name}</h1>
                    <div className="flex items-center gap-2">
                        <MdEditCalendar />
                        <h1>{duration} weeks</h1>
                    </div>
                    <h1 className="text-3xl font-bold">&#8358;{Intl.NumberFormat().format(price)}</h1>
                    <Button type="primary" className="bg-primary">Enroll</Button>
                </div>
            </div>
            <div className="w-[300px] h-[500px] bg-primary rounded-xl flex justify-center items-start courseCard-down p-2">
                <h1 className="transform rotate-180 text-3xl font-bold text-white text-center leading-tight mt-10" style={{ writingMode: 'vertical-rl' }}>
                    {name.length > 25 ? `${name.substring(0, 25)}...` : name}
                </h1>
            </div>
        </div>
    )
}

export default CourseCard