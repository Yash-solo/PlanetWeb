import "./App.css"
import EarthPlanet from "./componants/EarthPlanet"
import Navbar from "./componants/Navbar"
import HeroText from "./componants/HeroText"
import { useState } from "react"
const App = () => {
  const [PId,setPID] = useState(3);
  function PlanetId(pid){
    setPID(pid);
  }
  return (
    <>
      <section className="relative overflow-hidden w-full text-[#ddd] p-3 h-screen bg-[url('../public/images/space.png')]">
        <EarthPlanet PID ={PId}/>
        <Navbar/>
        <HeroText PlanetId={PlanetId}/>
      </section>
    </>
  )
}

export default App
