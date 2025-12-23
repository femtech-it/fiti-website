import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom"
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="p-8 md:p-12 lg:p-20 bg-gray-50 flex flex-col md:flex-row justify-between gap-12 lg:gap-20">
            <div className="flex-1 flex flex-col gap-6">
                <img src="/assets/f_logo.png" alt="" className="w-[180px]" />
                <p className="text-gray-600 max-w-md leading-relaxed">
                    At FEMTECH Training, we equip individuals with cutting-edge digital skills, fostering innovation, career growth, and economic empowerment in the ever-evolving tech landscape
                </p>
                <div className="flex items-center gap-4">
                    <Link to={""} className="text-primary text-2xl hover:text-secondary transition-colors"><MdFacebook /></Link>
                    <Link to={""} className="text-primary text-2xl hover:text-secondary transition-colors"><BsInstagram /></Link>
                    <Link to={""} className="text-primary text-2xl hover:text-secondary transition-colors"><BsLinkedin /></Link>
                </div>
            </div>

            <div className="flex flex-col gap-6 min-w-[200px]">
                <h1 className="text-2xl font-bold text-primary">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                    <li><Link to={"/about"} className="text-gray-600 hover:text-secondary transition-colors">About us</Link></li>
                    <li><Link to={"/courses"} className="text-gray-600 hover:text-secondary transition-colors">Courses</Link></li>
                    <li><Link to={"/terms"} className="text-gray-600 hover:text-secondary transition-colors">Terms & Condition</Link></li>
                    <li><Link to={""} className="text-gray-600 hover:text-secondary transition-colors">FAQ</Link></li>
                    <li><Link to={"/resources"} className="text-gray-600 hover:text-secondary transition-colors">Resources</Link></li>
                    <li><Link to={"/student"} className="text-gray-600 hover:text-secondary transition-colors">Students</Link></li>
                    <li><Link to={"/gallery"} className="text-gray-600 hover:text-secondary transition-colors">Gallery</Link></li>
                    <li><Link to={""} className="text-gray-600 hover:text-secondary transition-colors">Privacy Policy</Link></li>
                </ul>
            </div>

            <div className="flex-1 flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-primary">Contact</h1>
                <ul className="flex flex-col gap-4">
                    <li className="text-gray-600 leading-relaxed">
                        Ilorin Office: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam modi molestiae placeat culpa blanditiis.
                    </li>
                    <li className="font-semibold text-primary">fiti@femtechtraining.com</li>
                    <li className="font-semibold text-primary">+(234) 705-996-1675</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer