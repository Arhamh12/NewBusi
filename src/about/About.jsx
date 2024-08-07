import React from "react";
import Boys from './Assets/2Boys.png'
import Mesh from './Assets/Mesh.png'
import Approach from './Assets/Approach.png'
import './About.css'



export default function About() {

    return (<>
        <div className="boys">
            <img src={Boys} alt="" className="Boys" />
            <div className="boysInfo">
                <h1>Welcome to Hama IT Solutions!</h1>
                <p>Founded by two visionary young entrepreneurs, Arhamh and Ali, Hama IT Solutions is dedicated to empowering your business through robust IT and cloud management services. We specialize in refining your technological framework, whether you're a budding startup or an established enterprise looking to modernize.</p>
            </div>
        </div>
        <div className="mission">
            <div className="meshInfo">
                <h1>
                    Our Mission
                </h1>
                <p>
                    At Hama IT Solutions, our mission is simple:
                    to elevate your business by enhancing your IT infrastructure.
                    We understand that in the digital age, 
                    the backbone of any successful company is its technology. 
                    That's why we offer comprehensive solutions tailored to your specific needs.
                </p>
            </div>
            <img src={Mesh} alt="" className="meshImg"/>
        </div>
        <div className="approach">
            <img src={Approach} alt="" className="ApproachImg"/>
            <div className="approachInfo">
                <h1>
                    Our Approach
                </h1>
                <p>
                    Arhamh, with his expertise in technology, 
                    ensures that all technical solutions from Hama IT Solutions are state-of-the-art, 
                    reliable, and scalable. 
                    His forward-thinking approach in technology makes your business ready for the future.
                    <br />
                    <br />
                    Ali manages the helm of management and communications, 
                    ensuring that our projects not only meet but exceed client expectations. 
                    His strategic oversight guarantees that our solutions are aligned with your business goals 
                    and delivered with exceptional service.
                </p>
            </div>
            

        </div>



    </>)
}