import React from "react";
import Mail from './Assets/Mail.png'
import './Contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { useEmail } from "../Contact Us/EmailContext";

export default function Contact() {
    const { sendEmail } = useEmail();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const lastName = event.target.lastName.value;
        const message = event.target.message.value;

        const emailData = { email, lastName, message };
        await sendEmail(emailData);
        // Handle post-send (like showing a message)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="contact">
                <img src={Mail} alt="" className="mailImg" />
                <div className="Get">
                    <h1 className="title">Get in touch</h1>
                    <label htmlFor="email"> <HiOutlineMail /> Email:</label>
                    <br />
                    <input type="Email" id="email" placeholder="example@example.com" className="input" />
                    <br />
                    <label htmlFor="lastName"><BsPersonFill />Last Name:</label>
                    <br />
                    <input type="text" id="lastName" placeholder="Last Name" className="input" />
                    <br />
                    <br />
                    <textarea id="message" cols="30" rows="10" placeholder="Message" className="message"></textarea>
                    <br />
                    <button type="submit" className="Btn">Send Message</button>
                </div>
            </div>
        </form>
    );
}
