import React, { createContext, useContext } from 'react';

const EmailContext = createContext(null);

export const useEmail = () => useContext(EmailContext);

export const EmailProvider = ({ children }) => {
    const sendEmail = async (emailData) => {
        console.log('Sending data:', emailData);
        try {
            const response = await fetch('https://3001-dot-1723052994590-dot-devshell.appspot.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailData)
            });
            const data = await response.json();
            return data; 
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
