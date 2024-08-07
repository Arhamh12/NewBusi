import React from "react";
import './Service.css'
import Cloud from './Assets/Cloud.png'
import Hardware from './Assets/Hardware.png'
import WebDev from './Assets/WebDev.png'
import Software from './Assets/Software.png'


export default function Service() {
    return (
        <>
            <h1 className="title">
                Services we offer
            </h1>
            <div className="Service">
                <div className="services">
                    <img src={Cloud} alt="" className="serviceImg" />
                    <h1>
                        Cloud Management
                    </h1>
                    <p>
                        Streamline and secure your operations with our cutting-edge cloud solutions
                    </p>
                </div>
                <div className="services">
                    <img src={Hardware} alt="" className="serviceImg" />
                    <h1>
                        Hardware Upgrades
                    </h1>
                    <p>
                        Stay ahead of the curve with the latest in hardware technology
                        to ensure smooth and efficient operations.
                    </p>
                </div>
                <div className="services">
                    <img src={WebDev} alt="" className="serviceImg" />
                    <h1>
                        Website Development
                    </h1>
                    <p>
                        Enhance your online presence with a professional,
                        user-friendly website designed to capture your brand’s essence
                    </p>
                </div>
                <div className="services">
                    <img src={Software} alt="" className="serviceImg" />
                    <h1>
                        Software Solutions
                    </h1>
                    <p>
                        Custom software development and system integration for scalable business growth.
                    </p>
                </div>
            </div>
        </>
    )
}