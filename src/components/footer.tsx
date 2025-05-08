import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom"
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-5 flex justify-around gap-10">
        <div className="md:w-[500px] w-full flex flex-col gap-4">
            <img src="/assets/f_logo.png" alt="" className="w-[150px]" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit saepe modi odio adipisci! Esse, quod et. Quaerat quidem eos laboriosam iure deleniti esse cum aliquid distinctio quas minus ipsam iste tenetur quam veritatis ut, necessitatibus adipisci at temporibus nobis non quia nostrum doloribus blanditiis assumenda. Vitae dolorum maiores facere ipsa quis. Molestias neque distinctio vero eaque eum ab amet.</p>
            <div className="flex items-center gap-3">
                <Link to={""}><MdFacebook /></Link>
                <Link to={""}><BsInstagram /></Link>
                <Link to={""}><BsLinkedin /></Link>
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Quick Links</h1>
            <ul>
                <li><Link to={""}>About us</Link></li>
                <li><Link to={""}>Courses</Link></li>
                <li><Link to={""}>Terms & Condition</Link></li>
                <li><Link to={""}>FAQ</Link></li>
                <li><Link to={""}>Resources</Link></li>
                <li><Link to={""}>Students</Link></li>
                <li><Link to={""}>Gallery</Link></li>
                <li><Link to={""}>privacy Police</Link></li>
            </ul>
        </div>
        <div className="flex flex-col gap-3 md:w-[400px] w-[100%]">
            <h1 className="text-2xl font-bold">Contact</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam modi molestiae placeat culpa blanditiis cum aliquam accusantium, fugiat ipsam pariatur, ducimus eos. Aliquam dolor esse, porro repellat ipsam perspiciatis.</li>
                <li>fiti@femtechtraining.com</li>
                <li>+(234) 705-996-1675</li>
            </ul>
        </div>
        
    </footer>
  )
}

export default Footer