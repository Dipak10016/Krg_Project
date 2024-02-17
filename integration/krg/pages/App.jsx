import React from "react";
import { Route, Routes } from 'react-router-dom'

import Homepage from '../pages/homepage/homepage'
import Profile from "../pages/profile/App.jsx"
import Viewmore from "../pages/viewmore/viewmore.jsx"
import Companypage_user from "../pages/companypage user/companypage_user.jsx"
import Applicationpage from '../pages/application page/Applicationpage.jsx'
import Contactus from "../pages/contact us/Contactus.jsx"
import Companycomp from '../pages/companypage comp/companypage_comp.jsx'
import Loginpage from "../pages/login page/loginpage.jsx"
import AboutUs from '../pages/aboutus/AboutUS.jsx'
import SignUpForm from "./signup page/SignUpForm.jsx";
import RegistrationForm from "./registration page/RegistrationForm.jsx";

function App(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route exact path="/profile" element={<Profile/>}></Route>
                <Route exact path="/viewmore" element={<Viewmore/>}></Route>
                <Route exact path="/companypage" element={<Companypage_user/>}></Route>
                <Route exact path="/application" element={<Applicationpage/>}></Route>
                <Route exact path="/contactus" element={<Contactus/>}></Route>
                <Route exact path="/companycomp" element={<Companycomp/>}></Route>
                <Route exact path="/login" element={<Loginpage/>}></Route>
                <Route exact path="/aboutus" element={<AboutUs/>}></Route>
                <Route exact path="/signup" element={<SignUpForm/>}></Route>
                <Route exact path="/register" element={<RegistrationForm/>}></Route>

            </Routes>
        </>
    )
}

export default App