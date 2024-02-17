import React from "react";
import abg from "./assets/abt-banner2.jpg"
import "./herosec.css"
import Jobtab_companypage_user from "./jobtab_companypage_user.jsx"
function Herosec_companypage_user({companyimg,companylogo,companyname,jobtitle,jobsalary,joblocation,jobtype,jobrole,jobexperience,jobdiscription,keyskills,companydiscription}){
    const companydiscription2 = companydiscription;
    return(
        <>
            <div className="herosec_companypage_user">
                <div className="companybanner_companypage_user">
                    <div className="companylogo_companypage_user">
                        <img src={companylogo} alt="company image" 
                        />
                    </div>
                    <p>{companyname}</p>
                </div>
                <div className="imgbackground_companypage_user"
                
                    style={{
                        // backgroundImage:{abg},/ 
                        height: "45vh",width:"100%", backgroundRepeat: "no-repeat",backgroundPosition:"center",backgroundSize:"cover"
                    }}
                ><span></span></div>
                    <div className="maincontent_companypage_user">
                        <div className="jobdetailsdiv_companypage_user">

                            <div className="jobdetail_companypage_user">

                                
                                <p className="jobdisheading_companypage_user">Job Discription</p>
                                <Jobtab_companypage_user
                                    Jobtitle={jobtitle}
                                    salary={jobsalary}
                                    location={joblocation}
                                    Jobdiscription={jobdiscription}
                                    Jobexperience={jobexperience}
                                    Jobrole={jobrole}
                                    Jobtype={jobtype}/>
                                
                                {/* <jobtab_companypage_user/> */}
                            </div>
                            
                        </div>
                        <div className="keyskills_companypage_user">
                        <div className="skillheading_companypage_user">
                            <p>Key Skills</p>
                        </div>
                        <p id="skills_companypage_user">{keyskills}</p>
                       </div>
                       <div className="jobdiscription_companypage_user">
                        {/* <p className="jobdisheading">Job Discription</p> */}
                        <p className="distext_companypage_user">{jobdiscription}</p>
                       </div>
                       
                        
                    </div>
                    <div className="companydis_companypage_user">
                        <div className="companydisheading_companypage_user">

                        <p >About Our Company</p>
                        </div>
                            <p className="distext_companypage_user">{companydiscription}</p>
                    </div>
                
            </div>
           
        </>
    )

}

export default Herosec_companypage_user;