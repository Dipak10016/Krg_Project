import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './index.css'
import App from '../pages/App.jsx'
import Profile from "../pages/profile/App.jsx"
import Viewmore from "../pages/viewmore/viewmore.jsx"
import Homepage from '../pages/homepage/homepage'
import Companypage_user from "../pages/companypage user/companypage_user.jsx"
import Applicationpage from '../pages/application page/Applicationpage.jsx'
import Contactus from "../pages/contact us/Contactus.jsx"
import Companycomp from '../pages/companypage comp/companypage_comp.jsx'
import Loginpage from "../pages/login page/loginpage.jsx"
import AboutUs from '../pages/aboutus/AboutUS.jsx'
import Navbar from '../pages/homepage/components/Nav/Navbar.jsx'
import Footer from '../pages/homepage/components/footer/Footer.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <App/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)

{/* { <Applicationpage /> } */}
// { <Companypage_user/> }
{/* <Viewmore/> */}
{/* { <Companycomp/> } */}
{/* <Contactus/> */}
{/* { <Loginpage/> } */}
{/* { <Profile/>} */}
{/* <AboutUs/>/ */}
{/* <Homepage/> */}