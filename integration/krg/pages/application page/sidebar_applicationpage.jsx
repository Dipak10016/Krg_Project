import React from "react";
import './Sidebar_applicationpage.css'
import { Link } from "react-router-dom";


function Sidebar_applicationpage(){

    return(
        <>
            <div class="sidenav_applicationpage">
                <div class="path_applicationpage">
                    <Link to='/'>Home</Link>
                </div>
                <div class="profiletablink_applicationpage">
                    <a id="tabheading_applicationpage" href="#">Manage My Account</a>
                    <div class="sublinks_applicationpage">
                    <a href="#">Personality test</a> <Link to='/profile'>My Profile</Link> <a href="#">Resume</a>
                    </div>
                </div>
                <div class="applicationtablink_applicationpage">
                    <Link id="tabheading_applicationpage" to='/application'>My Applications</Link>
                    <div class="sublinks_applicationpage">
                    <a href="#">Active Applications</a> <a href="#">History</a>
                    </div>
                </div>
                <div class="subcriptionstablink_applicationpage">
                    <a id="tabheading_applicationpage" href="#">My Subcriptions</a>
                </div>
                <div class="settingtablink_applicationpage">
                    <a id="tabheading_applicationpage" href="#">Setting</a>
                </div>
            </div>
        </>
    )
}

export default Sidebar_applicationpage;