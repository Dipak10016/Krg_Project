import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <div className="profile_mobilesidebar">
        {/* Your mobile Sidebar content */}
        <input className="profile_dark-light" type="checkbox" id="dark-light" name="dark-light" />

        <div className="profile_sec-center">
          <input className="profile_dropdown" type="checkbox" id="dropdown" name="dropdown" />
          <label className="profile_for-dropdown" htmlFor="dropdown">
            Dropdown Menu <i className="profile_uil uil-arrow-down"></i>
          </label>
          <div className="profile_section-dropdown">
            <Link to = '/'>Home<i className="profile_uil uil-arrow-right"></i></Link>
            <a href="#">Resume<i className="profile_uil uil-arrow-right"></i></a>
            <a href="#">Personality test<i className="profile_uil uil-arrow-right"></i></a>
            <input className="profile_dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub" />
            <Link to='/application'><label className="profile_for-dropdown-sub" htmlFor="dropdown-sub">
              My Applications <i className="profile_uil uil-plus"></i>
            </label></Link>
            <div className="profile_section-dropdown-sub">
              <a href="#">Active Applications<i className="profile_uil uil-arrow-right"></i></a>
              <a href="#">History<i className="profile_uil uil-arrow-right"></i></a>
            </div>

            <a href="#">My subscriptions<i className="profile_uil uil-arrow-right"></i></a>
            <a href="#">Settings<i className="profile_uil uil-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="profile_maincontainer">
        {/* Your main container content */}
        <div className="profile_sidenav">
          <div className="profile_path">
            <Link to='/'>Home</Link>
          </div>
          <div className="profile_profiletablink">
            <a id="tabheading" href="#">
              Manage My Account
            </a>
            <div className="profile_sublinks">
              <a href="#">Personality test</a> <a href="#">My profile</a> <a href="#">Resume</a>
            </div>
          </div>
          <div className="profile_applicationtablink">
            <Link id='tabheading' to = '/application'>My Appplications</Link>
            <div className="profile_sublinks">
              <a href="#">Active Applications</a> <a href="#">History</a>
            </div>
          </div>
          <div className="profile_subscriptionstablink">
            <a id="tabheading" href="#">
              My Subscriptions
            </a>
          </div>
          <div className="profile_settingtablink">
            <a id="tabheading" href="#">
              Settings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
