import Spline from '@splinetool/react-spline'
import { useEffect, useState } from 'react'

const EarthPlanet = (props) => {
    const [planetData,setPlanetdata] = useState([]);
    
    useEffect(()=>{
        async function getPdata(){
            const response = await fetch("./data/planet.json");
            const data = await response.json();
            setPlanetdata(data);
        }
        getPdata();
    },[])

    //filter data and show
    const filtered_planet = planetData.filter((planet)=>{
        return planet.id === props.PID;
    })
    if(filtered_planet.length===0){
        return 
    }
  return (
    <>
        <div className="w-full h-full absolute bottom-[-50%]">
            <Spline scene={filtered_planet[0].SPURl}/>
        </div>
    </>
  )
}

export default EarthPlanet
