import React, { createContext, useContext } from 'react';

const EmailContext = createContext(null);

export const useEmail = () => useContext(EmailContext);

export const EmailProvider = ({ children }) => {
    const sendEmail = async (emailData) => {
        console.log('Sending data:', emailData);
        try {
            // Updated endpoint URL
            const response = await fetch('https://radiant-basin-85181-d38e6e3dbc1f.herokuapp.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const text = await response.text();

            try {
                const data = JSON.parse(text); 
                return data;
            } catch (err) {
                console.error('Failed to parse JSON:', err);
                return { success: false, message: text }; 
            }
        } catch (error) {
            console.error('Error sending email:', error);
            return null; // Handle error conditions here
        }
    };
    return (
        <EmailContext.Provider value={{ sendEmail }}>
            {children}
        </EmailContext.Provider>
    );
};
