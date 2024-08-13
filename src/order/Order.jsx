import React, { useState } from "react";
import "./order.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Back({ step, handleBack }) {
    if (step > 1 && step <= 5) {
        return (
            <button type="button" onClick={handleBack}>
                Back
            </button>
        );
    }
    return null;
}

export default function Order() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        hardwareUpgrades: [],
        cloudManagement: [],
        website: "",
        inspection: false,
    });

    const navigate = useNavigate();

    const handleExit = () => {
        navigate("/Service");
    };

    const handleNext = () => {
        setStep(step + 1);
        console.log(step);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://radiant-basin-85181-d38e6e3dbc1f.herokuapp.com/send-order-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStep(step + 1);
                navigate("/Service");
            } else {
                alert("There was an error sending the email. Please try again later.");
            }
        } catch (error) {
            console.error("There was an error sending the email!", error);
            alert("There was an error sending the email. Please try again later.");
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData((prevData) => {
            const updatedList = checked
                ? [...prevData[name], value]
                : prevData[name].filter((item) => item !== value);
            return { ...prevData, [name]: updatedList };
        });
    };

    return (
        <div className="form-container">
            <form>
                {step === 1 && (
                    <div>
                        <h2>Step 1: Company Information</h2>
                        <div className="form-group">
                            <label>Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h2>Step 2: Hardware Upgrades</h2>
                        <div className="form-group">
                            <div className="checkbox-wrapper-60">
                                <input
                                    type="checkbox"
                                    className="check"
                                    id="check1-60"
                                    name="hardwareUpgrades"
                                    value="New PCs"
                                    checked={formData.hardwareUpgrades.includes("New PCs")}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="check1-60" className="label">
                                    <svg viewBox="0 0 65 65" height="30" width="30">
                                        <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
                                        <g transform="translate(-23,-967.36216)" id="layer1-60">
                                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                                        </g>
                                    </svg>
                                    <span>New PCs</span>
                                </label>
                            </div>
                            <div className="checkbox-wrapper-60">
                                <input
                                    type="checkbox"
                                    className="check"
                                    id="check2-60"
                                    name="hardwareUpgrades"
                                    value="New Keyboard"
                                    checked={formData.hardwareUpgrades.includes("New Keyboard")}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="check2-60" className="label">
                                    <svg viewBox="0 0 65 65" height="30" width="30">
                                        <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
                                        <g transform="translate(-23,-967.36216)" id="layer1-60">
                                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                                        </g>
                                    </svg>
                                    <span>New Keyboard</span>
                                </label>
                            </div>
                            <div className="checkbox-wrapper-60">
                                <input
                                    type="checkbox"
                                    className="check"
                                    id="check3-60"
                                    name="hardwareUpgrades"
                                    value="Internet connections and router"
                                    checked={formData.hardwareUpgrades.includes("Internet connections and router")}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="check3-60" className="label">
                                    <svg viewBox="0 0 65 65" height="30" width="30">
                                        <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
                                        <g transform="translate(-23,-967.36216)" id="layer1-60">
                                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                                        </g>
                                    </svg>
                                    <span>Internet connections and router</span>
                                </label>
                            </div>
                            <div className="checkbox-wrapper-60">
                                <input
                                    type="checkbox"
                                    className="check"
                                    id="check4-60"
                                    name="hardwareUpgrades"
                                    value="New Printer"
                                    checked={formData.hardwareUpgrades.includes("New Printer")}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="check4-60" className="label">
                                    <svg viewBox="0 0 65 65" height="30" width="30">
                                        <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
                                        <g transform="translate(-23,-967.36216)" id="layer1-60">
                                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                                        </g>
                                    </svg>
                                    <span>New Printer</span>
                                </label>
                            </div>
                            <div className="checkbox-wrapper-60">
                                <input
                                    type="checkbox"
                                    className="check"
                                    id="check5-60"
                                    name="hardwareUpgrades"
                                    value="New Server"
                                    checked={formData.hardwareUpgrades.includes("New Server")}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="check5-60" className="label">
                                    <svg viewBox="0 0 65 65" height="30" width="30">
                                        <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
                                        <g transform="translate(-23,-967.36216)" id="layer1-60">
                                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                                        </g>
                                    </svg>
                                    <span>New Server</span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h2>Step 3: Cloud Management</h2>
                        <div className="form-group">
                            <div className="checkbox-wrapper-60">
                                <input
                                    type="checkbox"
                                    className="check"
                                    id="check6-60"
                                    name="cloudManagement"
                                    value="Custom Domain"
                                    checked={formData.cloudManagement.includes("Custom Domain")}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="check6-60" className="label">
                                    <svg viewBox="0 0 65 65" height="30" width="30">
                                        <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
                                        <g transform="translate(-23,-967.36216)" id="layer1-60">
                                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                                        </g>
                                    </svg>
                                    <span>Custom Domain</span>
                                </label>
                            </div>
                            <div className="checkbox-wrapper-60">
                                <input
                                    type="checkbox"
                                    className="check"
                                    id="check7-60"
                                    name="cloudManagement"
                                    value="Email Hosting"
                                    checked={formData.cloudManagement.includes("Email Hosting")}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="check7-60" className="label">
                                    <svg viewBox="0 0 65 65" height="30" width="30">
                                        <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
                                        <g transform="translate(-23,-967.36216)" id="layer1-60">
                                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                                        </g>
                                    </svg>
                                    <span>Email Hosting</span>
                                </label>
                            </div>
                            <div className="checkbox-wrapper-60">
                                <input
                                    type="checkbox"
                                    className="check"
                                    id="check8-60"
                                    name="cloudManagement"
                                    value="Set-up Outlook OneDrive"
                                    checked={formData.cloudManagement.includes("Set-up Outlook OneDrive")}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="check8-60" className="label">
                                    <svg viewBox="0 0 65 65" height="30" width="30">
                                        <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
                                        <g transform="translate(-23,-967.36216)" id="layer1-60">
                                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                                        </g>
                                    </svg>
                                    <span>Set-up Outlook OneDrive</span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                {step === 4 && (
                    <div>
                        <h2>Step 4: Website</h2>
                        <div className="form-group">
                            <label>
                                <input
                                    type="radio"
                                    name="website"
                                    value="One-time payment for a website"
                                    checked={formData.website === "One-time payment for a website"}
                                    onChange={handleChange}
                                />
                                A one-time payment for a website
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="website"
                                    value="Monthly subscription with bug fixes and changes"
                                    checked={formData.website === "Monthly subscription with bug fixes and changes"}
                                    onChange={handleChange}
                                />
                                A monthly subscription includes free bug fixes and changes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="website"
                                    value="Bug fixes"
                                    checked={formData.website === "Bug fixes"}
                                    onChange={handleChange}
                                />
                                Bug fixes
                            </label>
                        </div>
                    </div>
                )}
                {step === 5 && (
                    <div>
                        <h2>Step 5: Company Technology Inspection</h2>
                        <div className="form-group">
                            <div className="checkbox-wrapper-60">
                                <input
                                    type="checkbox"
                                    className="check"
                                    id="check9-60"
                                    name="inspection"
                                    checked={formData.inspection}
                                    onChange={handleChange}
                                />
                                <label htmlFor="check9-60" className="label">
                                    <svg viewBox="0 0 65 65" height="30" width="30">
                                        <rect x="7" y="7" width="50" height="50" stroke="black" fill="white" />
                                        <g transform="translate(-23,-967.36216)" id="layer1-60">
                                            <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className="path1" />
                                        </g>
                                    </svg>
                                    <span>Inspect your company technology</span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                {step === 6 && (
                    <div>
                        <h2>Thank you for your submission!</h2>
                        <p>Your details have been saved. An employee will get back to you soon.</p>
                        <button type="button" onClick={handleExit}>
                            Exit
                        </button>
                    </div>
                )}

                <div className="form-navigation">
                    <Back step={step} handleBack={handleBack} />
                    {step < 5 && (
                        <button type="button" onClick={handleNext}>
                            Next
                        </button>
                    )}
                    {step === 5 && (
                        <button type="button" onClick={handleSubmit}>
                            Confirm
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
