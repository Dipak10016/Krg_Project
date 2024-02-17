import React from 'react';
import '../../css/Domain.css';
import f from './images/4.png'
import a from './images/2.png'
import apple from './images/3.png'
import n from './images/5.png'
import g from './images/6.png'
import microsoft from './images/1.png'


const  CompanySection= () => {
    return (
      <>
  <div>
    <div className="recommended-container">
        <div className="rectangle-18">
            <div className="rectangle-17"></div>
            </div>
            <div className="recommended-jobs">Companies</div>
            </div>
            
            <div className="company-row">
                <div className="company">
                <img className="" src = {f} alt="Company" />
                </div>

                <div className="company">
                <img className="" src={a} alt="Company" />
                </div>

                <div className="company">
                <img className="" src={apple} alt="Company" />
                </div>

                {/* Add more companies as needed */}

           </div>


            <div className="company-row">
                <div className="company">
                <img className="" src={n} alt="Company" />
                </div>

                <div className="company">
                <img className="" src={g} alt="Company" />
                </div>

                <div className="company">
                <img className="" src={microsoft} alt="Company" />
                </div>
            </div>
      </div>
      </>
    );
  };
  
  export default CompanySection;