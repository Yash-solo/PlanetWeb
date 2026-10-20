import "./App.css"
import EarthPlanet from "./componants/EarthPlanet"
import Navbar from "./componants/Navbar"
import HeroText from "./componants/HeroText"
const App = () => {
  return (
    <>
      <section className="relative overflow-hidden w-full text-[#ddd] p-3 h-screen bg-[url('../public/images/space.png')]">
        <EarthPlanet/>
        <Navbar/>
        <HeroText/>
      </section>
      <h1>Hello world</h1>
    </>
  )
}

export default App
