import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Testimonials from './components/Testimonials'
import Blog from './components/Blogs'
import ContactUs from './components/ContactUs';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Calculators from './components/CalculatorsPie'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/testimonials' element={<Testimonials/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
          <Route exact path='/contact-us' element={<ContactUs/>}/> 
          <Route exact path='/calculators' element={<Calculators/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
