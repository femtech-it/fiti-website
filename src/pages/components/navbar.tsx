import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed w-[100%] top-0 left-0 z-50">
            <div className="bg-primary text-white py-1">
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <nav className="flex justify-between items-center bg-white shadow py-4 px-10 flex-wrap">
                <Link to={""}>
                    <img src="/assets/f_logo.png" alt="" className="w-[200px]" />
                </Link>
                <div className="flex justify-center items-center gap-10">
                    <Link to={"/"} className="">Home</Link>
                    <Link to={"/courses"}>Courses</Link>
                    <Link to={"/resources"}>Resources</Link>
                    <Link to={"/student"}>Student</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/courses"} className="bg-secondary px-10 py-2 rounded-xl text-white">Enroll</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar