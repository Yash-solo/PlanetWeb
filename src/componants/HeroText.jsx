import { useState } from "react"
const HeroText = (props) => {
    const [isSelect,setSelect] = useState(false);
    const [PText,setPText] = useState("Earth");
    const [btnBg,setBtnBg] = useState("blue");
    const realTemp = (
        <>
            <button onClick={()=>{
                    setSelect(!isSelect);
                    if(isSelect===true){
                        alert("Your choosen Planet is Mars");
                    }
                }} className={`p-5 rounded-2xl cursor-pointer text-2xl bg-${btnBg}-500 text-white`}>Choose Now</button>
        </>
    )
    const FakeTemp = (
        <>
            <div className="absolute flex flex-col gap-2 p-2 bottom-[-20%] w-120 h-50 bg-[rgb(17,17,17)] rounded-2xl border border-[#ddd]">
                <span className="text-lg cursor-pointer" onClick={()=>{
                    setSelect(!isSelect)
                }}>✂</span>
                <div className="grid grid-cols-7 gap-2">
                    <div onClick={()=>{
                        props.PlanetId(3);
                        setPText("Earth");
                        setBtnBg("blue");
                    }} className="w-14 p-1 cursor-pointer overflow-hidden rounded-[5px] h-14 border border-[#ddd] ">
                        <img src="./images/earth.jpg" alt="Earth" />
                    </div>
                    <div onClick={()=>{
                        props.PlanetId(4);
                        setPText("Mars");
                        setBtnBg("orange")
                    }} className="w-14 p-1 cursor-pointer overflow-hidden rounded-[5px] h-14 border border-[#ddd] ">    
                        <img  src="./images/mars.jpg" alt="Mars" />
                    </div>
                </div>
            </div>
        </>
    )
  return (
    <>
        <section className="grid grid-cols-2 h-full w-full grid-rows-2">
            <div className="flex items-center flex-col gap-2 justify-center ">
                <h2 className="text-4xl font-mono">Welcome to Planet Web!</h2>
                <p className="lg:max-w-110 md:max-w-120 text-[#b5b5b5]">This is an awesome website to read about our solar system. Connect with us for see details about any planet of our solar System.</p>
            </div>
            <div className="relative flex items-center flex-col gap-4 justify-center ">
                <h2 className="text-4xl font-mono">Choose Your Fav Planet!</h2>
                {isSelect? FakeTemp:realTemp}    
            </div>
            <h1 className="w-full ml-5 text-center text-9xl">{PText}</h1>
            <h1 className="w-full text-center text-9xl">Planet</h1>
        </section>
    </>
  )
}

export default HeroText
