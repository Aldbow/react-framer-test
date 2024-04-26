import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="#" className="text-xl tracking-tight bg-gradient-to-r from-slate-200  to-slate-400 bg-clip-text font-bold text-transparent">Aldiva</a>
        </div>
        <div className="mb-0 flex items-center justify-center gap-4 text-2xl">
            <a className="hover:text-red-500 hover:scale-110 hover:transition hover:duration-200 hover:ease-in" href="https://www.instagram.com/aldivawibowo"><FaInstagram/></a>
            <a className="hover:text-blue-500 hover:transition hover:scale-110 hover:duration-200 hover:ease-in" href="https://www.linkedin.com/in/aldiva-wibowo"><FaLinkedin/></a>
            <a className="hover:text-slate-500 hover:scale-110 hover:transition hover:duration-200 hover:ease-in" href="https://github.com/Aldbow"><FaGithub/></a>
            <a className="hover:text-amber-500 hover:scale-110 hover:transition hover:duration-200 hover:ease-in" href="https://medium.com/@aldivaawibowo"><FaMedium/></a>
        </div>
    </nav>
  )
}

export default Navbar