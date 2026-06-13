import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx'
import Admin from './pages/Admin.jsx'
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import PageWrapper from './components/PageWrapper.jsx';
import Footer from './components/Footer.jsx';

function App() {


  return (
    <>
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/admin" element={<PageWrapper><Admin /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    <Footer/>
  </BrowserRouter>

    </>
  )
}

export default App
