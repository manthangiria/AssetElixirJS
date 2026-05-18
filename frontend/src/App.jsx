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
import AddBlogPost from './components/AddBlogs'
import Misc from './components/Misc'
import AboutUs from './components/AboutUs'
import Admin from './components/Admin'
import { useAuthContext } from './hooks/useAuthContext'
import DedicatedBlog from './components/DedicatedBlogs'
import SavingCalculator from './components/SavingsCalculator'


function App() {
  const {user} = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/testimonials' element={<Testimonials/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
          <Route exact path='/blogs/:id' element={<DedicatedBlog/>}/>
          <Route exact path='/contact-us' element={<ContactUs/>}/> 
          <Route exact path='/calculators' element={<Calculators/>}/>
          <Route exact path='/savings' element={<SavingCalculator/>}/>
          {/* Only shown when user is logged in */}
          <Route exact path='/add_blogs' element={user ? <AddBlogPost/> : <Navigate to='/'/>}/>
          <Route exact path='/add_misc' element={user ? <Misc/> : <Navigate to='/'/>}/>
          {/* --------------------------------- */}
          <Route exact path='/about_us' element={<AboutUs/>}/>
          <Route exact path='/login' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
