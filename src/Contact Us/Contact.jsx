import React from "react";
import Mail from './Assets/Mail.png'
import './Contact.css'

import { HiOutlineMail } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";




export default function Contact() {
    return (
        <>
            <div className="contact">
                <img src={Mail} alt="" className="mailImg" />
                <div className="Get">
                    <h1 className="title">
                        Get in touch
                    </h1>
                    <label htmlFor=""> <HiOutlineMail />  Email:</label>
                    <br />
                    <input type="Email" placeholder="example@example.com" className="input" />
                    <br />
                    <label htmlFor="" ><BsPersonFill />Last Name:</label>
                    <br />
                    <input type="text" placeholder="      Last Name" className="input" ></input>
                    <br />
                    <br />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="message" ></textarea>
                </div>
            </div>
        </>
    )
}0