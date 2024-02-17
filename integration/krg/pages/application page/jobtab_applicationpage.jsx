import React from "react";
import './jobtab_applicationpage.css'
import Jobicon from './assets/jobicon.png'
import Location from './assets/location.jpg'

function Jobtab_applicationpage({jobtitle,salary,location,jobdiscription,status}){

    return(
        <>
            <div className="jobtab_applicationpage">
                <div className="jobimage_applicationpage">
                    <div className="jobimgae2_applicationpage">

                    <img id="jobimage_1_applicationpage" src={Jobicon} alt=""  />
                    </div>
                </div>
                <div className="jobcontent_applicationpage">
                    <div className="jobcontenthead_applicationpage"><p>{jobtitle}</p></div>
                    <div className="jobcontentdetails_applicationpage">
                    <div className="jobsalary_applicationpage">
                        <p>{salary}</p>
                    </div>
                    <div className="joblocation_applicationpage">
                        <div className="joblocationicon_applicationpage">
                        <img src={Location} alt="" width="25px" height="25px" />
                        </div>
                        <div className="joblocationname_applicationpage">
                        <p>{location}</p>
                        </div>
                    </div>
                    </div>
                    <div className="jobcontentdiscription_applicationpage">
                    <p>{jobdiscription}</p>
                    </div>
                    <div className="jobstatus2_applicationpage">
                    <div><p>Application Status :</p></div>
                    <div id="jobstatustext2_applicationpage"><p>{status}</p></div>
                </div>
                </div>
                <div className="jobstatus_applicationpage">
                    <div><p>Application Status</p></div>
                    <div id="jobstatustext_applicationpage"><p>{status}</p></div>
                </div>
            </div>

        </>
    )
}

export default Jobtab_applicationpage;