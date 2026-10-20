
const Navbar = () => {
  return (
    <>
        <nav className="w-full font-mono p-2 lg:px-25 flex items-center justify-between">
            <h1 className="lg:text-3xl font-semibold">Planet Web</h1>
            <ul className="flex lg:text-[23px] items-center justify-around gap-7">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Planets</li>
                <li className="cursor-pointer">Solar-System</li>
                <li className="cursor-pointer">News</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
