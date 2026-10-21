import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
        <nav className="w-full font-mono p-2 lg:px-25 flex items-center justify-between">
            <h1 className="lg:text-3xl font-semibold">Planet Web</h1>
            <ul className="flex lg:text-[23px] items-center justify-around gap-7">
                <Link to="/"><li className="cursor-pointer">Home</li></Link>
                <Link to="/Planets"><li className="cursor-pointer">Planets</li></Link>
                <Link to="/"><li className="cursor-pointer">Solar-System</li></Link>
                <Link to="/"><li className="cursor-pointer">News</li></Link>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
