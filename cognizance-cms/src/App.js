import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import AboutUs from './components/AboutUs'
import Events from './components/Events'
import Domains from './components/Domains'
import Alumini from './components/Alumini'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'
import HomePage from './components/HomePage.js'
import Membership from './components/Membership.js'
import DomainExplore from './components/DomainExplore.js'
import ForgotPwd from './components/ForgotPwd.js'
import ResetPwd from './components/ResetPwd.js'
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpwd" element={<ResetPwd />} />
        <Route path="/forgotpassword" element={<ForgotPwd />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/domains" element={<Domains/>} />
        <Route path="/alumini" element={<Alumini/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/get-membership" element={<Membership />} />
        <Route path="/domainExplore/:value" element={<DomainExplore />} />
      </Routes>
    </BrowserRouter>
  )
}
