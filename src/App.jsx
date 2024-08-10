import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home'
import Nav from './Nav/Nav'
import './App.css'
import About from './about/About'
import Service from './service/Service'
import Contact from './Contact Us/Contact';
import { ThemeProvider } from './Nav/ThemeContext';
import { EmailProvider } from './Contact Us/EmailContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <EmailProvider>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="AboutUs" element={<About />} />
              <Route path="Service" element={<Service />} />
              <Route path="Contact" element={<Contact />} />
            </Routes>
          </EmailProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
