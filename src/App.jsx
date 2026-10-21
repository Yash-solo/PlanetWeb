import "./App.css"
import EarthPlanet from "./componants/EarthPlanet"
import Navbar from "./componants/Navbar"
import HeroText from "./componants/HeroText"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Planets from "./componants/Planets/Planets"

const App = () => {
  const [PId,setPID] = useState(3);
  function PlanetId(pid){
    setPID(pid);
  }
  return (
    <>
      <section className="relative overflow-hidden w-full text-[#ddd] p-3 h-screen bg-[url('../public/images/space.png')]">
        <BrowserRouter basename="/PlanetWeb/">
          <Navbar/>
          <Routes>
            <Route path="/" element={<><EarthPlanet PID ={PId}/><HeroText PlanetId={PlanetId}/></>}></Route>
            <Route path="/planets" element={<Planets/>}></Route>
          </Routes>
        </BrowserRouter>

        
      </section>
    </>
  )
}

export default App
