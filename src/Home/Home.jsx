import React from "react";
import './Home.css'
import hero from './hero.png'

export default function Home(){
    return (<>
        <div className="main">
            <div className="hero">
                <h1 className="HeroTitle">
                    Improve Your Business
                     Technology With
                     <br />
                     HAMA IT Solutions
                    </h1>
                <p className="Desc">
                    Contact us to step up from old hardware and software to a newer faster generation
                    </p>
                <button className="Btn">
                    Get Quote</button>
                    </div>
            <img src={hero} alt="" className="HeroImg"/>
        </div>
    </>)
}


{/* <div className="main">
<div className="hero">
    <h1 className="HeroTitle">
        Improve Your Business
         Technology With
         <br />
         HAMA IT Solutions
        </h1>
    <p className="Desc">
        Contact us to step up from old hardware and software to a newer faster generation
        </p>
    <button className="Btn">
        Get Quote</button>
        </div>
<img src={hero} alt="" className="HeroImg"/>
</div> */}