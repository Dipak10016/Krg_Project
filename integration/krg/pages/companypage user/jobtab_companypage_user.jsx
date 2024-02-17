import React from "react";
import './jobtab_companypage_user.css'
import Jobicon_companypage_user from './assets/jobicon.png'
import Location_companypage_user from './assets/location.jpg'
import salaryicon_companypage_user from "./assets/salary.png"
import roleicon_companypage_user from "./assets/id-card.png"
import typeicon_companypage_user from "./assets/part-time.png"
import expicon_companypage_user from "./assets/user-experience.png"

function Jobtab_companypage_user({Jobtitle,salary,location,Jobexperience,Jobrole,Jobtype}){

    return(
        <>
            <div className="jobtab_companypage_user">
                
                <div className="jobimage_companypage_user">
                    <div className="jobimage2_companypage_user">

                        <img id="jobimage_1_companypage_user" src={Jobicon_companypage_user} alt=""/>
                    </div>

                </div>
                <div className="jobcontent_companypage_user">
                    <div className="jobcontenthead_companypage_user"><p>{Jobtitle}</p></div>
                    <div className="jobcontentdetails_companypage_user">
                    <div className="joblocation_companypage_user">
                    <div className="joblocationicon_companypage_user">
                        <img src={salaryicon_companypage_user} alt="" width="25px" height="25px" />
                        </div>
                        <p>$ {salary}</p>
                    </div>
                    <div className="joblocation_companypage_user">
                        <div className="joblocationicon_companypage_user">
                        <img src={Location_companypage_user} alt="" width="25px" height="25px" />
                        </div>
                        <div className="joblocationname_companypage_user">
                        <p>{location}</p>
                        </div>
                    </div>
                    <div className="joblocation_companypage_user">
                    <div className="joblocationicon_companypage_user">
                        <img src={expicon_companypage_user} alt="" width="25px" height="25px" />
                        </div>
                        <p>{Jobexperience}</p>
                    </div>
                    <div className="joblocation_companypage_user">
                    <div className="joblocationicon_companypage_user">
                        <img src={roleicon_companypage_user} alt="" width="25px" height="25px" />
                        </div>
                        <p>{Jobrole}</p>
                    </div>
                    <div className="joblocation_companypage_user">
                    <div className="joblocationicon_companypage_user">
                        <img src={typeicon_companypage_user} alt="" width="25px" height="25px" />
                        </div>
                    <p>{Jobtype}</p>
                    </div>
                    </div>
                    <div className="jobstatus2_companypage_user">
                        <button>Apply Now</button>
                </div>
                </div>
                <div className="jobstatus_companypage_user">
                <button>Apply Now</button>
                </div>
            </div>

        </>
    )
}

export default Jobtab_companypage_user;