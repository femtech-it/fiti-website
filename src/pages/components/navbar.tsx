import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed w-[100%] top-0 left-0 z-50">
            <div className="bg-primary text-white py-1">
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <nav className="flex justify-between items-center bg-white shadow py-4 px-6 md:px-10 flex-wrap relative">
                <Link to={"/"}>
                    <img src="/assets/f_logo.png" alt="" className="w-[150px] md:w-[200px]" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex justify-center items-center gap-6 xl:gap-10">
                    <Link to={"/"} className="hover:text-secondary transition-colors">Home</Link>
                    <Link to={"/courses"} className="hover:text-secondary transition-colors">Courses</Link>
                    <Link to={"/resources"} className="hover:text-secondary transition-colors">Resources</Link>
                    <Link to={"/student"} className="hover:text-secondary transition-colors">Student</Link>
                    <Link to={"/about"} className="hover:text-secondary transition-colors">About</Link>
                    <Link to={"/courses"} className="bg-secondary px-8 py-2 rounded-xl text-white hover:bg-opacity-90 transition-all">Enroll</Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-3xl text-primary focus:outline-none">
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Menu Tray */}
                <div className={`${isOpen ? "flex" : "hidden"} lg:hidden flex-col absolute top-full left-0 w-full bg-white shadow-lg py-6 px-10 gap-6 z-40 border-t border-gray-100`}>
                    <Link to={"/"} onClick={toggleMenu} className="text-lg font-medium">Home</Link>
                    <Link to={"/courses"} onClick={toggleMenu} className="text-lg font-medium">Courses</Link>
                    <Link to={"/resources"} onClick={toggleMenu} className="text-lg font-medium">Resources</Link>
                    <Link to={"/student"} onClick={toggleMenu} className="text-lg font-medium">Student</Link>
                    <Link to={"/about"} onClick={toggleMenu} className="text-lg font-medium">About</Link>
                    <Link to={"/courses"} onClick={toggleMenu} className="bg-secondary px-10 py-3 rounded-xl text-white text-center font-bold">Enroll</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar