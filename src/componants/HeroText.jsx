
const HeroText = () => {
  return (
    <>
        <section className="grid grid-cols-2 h-full w-full grid-rows-2">
            <div className="flex items-center flex-col gap-2 justify-center ">
                <h2 className="text-4xl font-mono">Welcome to Planet Web!</h2>
                <p className="lg:max-w-110 md:max-w-120 text-[#b5b5b5]">This is an awesome website to read about our solar system. Connect with us for see details about any planet of our solar System.</p>
            </div>
            <div className="flex items-center flex-col gap-4 justify-center ">
                <h2 className="text-4xl font-mono">Choose Your Fav Planet!</h2>
                <button className="p-5 rounded-2xl cursor-pointer text-2xl bg-blue-500 text-white">Choose Now</button>
            </div>
            <h1 className="w-full ml-5 text-center text-9xl">Earth</h1>
            <h1 className="w-full text-center text-9xl">Planet</h1>
        </section>
    </>
  )
}

export default HeroText
