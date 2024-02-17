import React from 'react';
import '../../css/Banner.css';
import { Link } from 'react-router-dom';


const  BannerSection= () => {
    return (
      <>
   <div className="frame000">
    <div className="frame-2000">
      <div className="text-scale303">
        <div className="_3000">
          We Offer 25,000 Job
          <br />
          Vacancies Right Now!
        </div>
      </div>
      <div className="text-scale303">
        <div className="_6000">
          The most complete field service software for IT &amp; Mobile
          Support, Fire
          <br />
          Services, Electrical, Maintainance, HVAC &amp; Security Industries
        </div>
      </div>
    </div>

    <div className="frame-601000">
      <div className="view-all-products">
        <Link to='/signup'><button className="button-sign-up" >Sign Up for Free</button></Link>
      </div>
    </div>
  </div>
      </>
    );
  };
  
  export default BannerSection;