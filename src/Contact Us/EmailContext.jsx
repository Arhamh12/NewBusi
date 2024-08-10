import React, { createContext, useContext } from 'react';

const EmailContext = createContext(null);

export const useEmail = () => useContext(EmailContext);

export const EmailProvider = ({ children }) => {
    const sendEmail = async (emailData) => {
        console.log('Sending data:', emailData);
            try {
                const response = await fetch('https://3001-idx-hama-1723052994590.cluster-p6qcyjpiljdwusmrjxdspyb5m2.cloudworkstations.dev/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(emailData)
                });

                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }

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
