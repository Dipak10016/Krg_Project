import React from 'react'
import main1 from './img/main 1.svg'
import ellipse20 from './img/Ellipse 20.svg'
import ellipse19 from './img/Ellipse 19.svg'
import ellipse23 from './img/Ellipse 23.svg'
import rectangle27 from './img/Rectangle 27.svg'
import "./AboutUs.css"

function AboutUs() {
    return (
        <div className='_aboutus'>
            {/* header */}
            <div className='header_aboutus'>
                <img src={main1} alt="" className="headerImg_aboutus" width="1800px"></img>
            </div>

            {/* About Us */}
            <div id="about_aboutus" className="aboutUs_aboutus">
            
                <div className="aboutUsLinks">
                    <ul>
                        <li><a href="#about">Who we are?</a></li>
                        <li><a href="#why">Why KRG?</a></li>
                        <li><a href="#mission">Our Mission</a></li>
                        <li><a href="#team">Our Team</a></li>
                    </ul>
                </div>
            
                <div className="aboutUsStart_aboutus">
                    <h1 className="aboutUsHeading_aboutus">ABOUT US</h1>
                    <p className="aboutUsContent_aboutus">
                        Knowledge Resource Group (KRG) is professionally managed new-age business advisory organization offering a wide range of specialized, multi-disciplinary professional services, which are critical for the growth of the organization and that meet the immediate as well as the long-term business needs of clients. Our value proposition lies as much in the phenomenal range as in the piercing depth of our globally benchmarked solutions, that empowers our client businesses with a competitive edge in a fast-evolving market place that demands ability and agility in the same breath.
                        <br></br><br></br>Our services include Cost Audit and Assurance, Cost Transformation Services, Virtual CFO Services, Research and Data Analytics services, Automation and Wealth Management. We thrive on challenge and are problem solvers based on custom approaches backed by data, which are critical for the clients’ growth in order to help them compete successfully in a rapidly changing market place. We place paramount importance not only on quality and technical excellence, but also in practicality.
                    </p>
                </div>

                <div className="aboutUsImage_aboutus">
                    <img src={ellipse20} alt=""></img>
                </div>
            </div>

            {/* Why KRG */}
            <div id="why_aboutus" className="why_aboutus">
                
                <div className="whyImage_aboutus">
                    <img src={ellipse19} alt="" style={{marginTop: '6rem', paddingLeft: '2.5rem', paddingRight: '2.5rem',}}></img>
                </div>

                <div className="whyStart_aboutus">
                    <h1 className="whyHeading_aboutus">WHY KRG</h1>
                    <p className="whyContent_aboutus">
                        As a vibrant Management Consultancy organization, we strongly believe that KRG’s growth is the derivate of the growth of KRG’s Clients. Our passion for sharing knowledge, working as a team, optimizing resources for the growth of the clients distinct ourself from other.
                        <br></br><br></br>Clients turn to KRG, when they want to be sure of success and work. KRG has built a track record of successful delivery in some of the most demanding and high profile situations. And with KRG’s collaborative style of working, not only does management achieve the results that it is seeking, but it gains other benefits as well.
                        <br></br>
                        <ul style={{paddingLeft: '3rem',}}>
                            <li>Results-driven</li>
                            <li>Flexibility</li>
                            <li>Organizational culture – we blend with the organization culture prevailing</li>
                            <li>Team work</li>
                            <li>Service</li>
                        </ul>
                    </p>
                </div>
            </div>

            {/* Our Mission */}
            <div id="mission_aboutus" className="mission_aboutus">
                
                <div>
                    <h1 className="missionHeading_aboutus">OUR MISSION</h1>
                </div>

                <div className="missionImage_aboutus">
                    <img src={rectangle27} alt=""></img>
                </div>

                <div style={{textAlign: 'center',}}>
                    <p className="missionContent_aboutus">
                        To achieve Client Satisfaction by providing Excellent, Innovative, Value-Added Services<br></br> as well as Technology Oriented Solutions on TIME
                    </p>
                </div>
            </div>

            {/* Our Team */}
            <div id="team_aboutus" style={{textAlign: 'center',}}>
                <h1 className="teamHeading_aboutus">OUR TEAM</h1>
            </div>

            <div className="teamStart_aboutus">
                
                <div className="teamImage1_aboutus">
                    <img src={ellipse23} alt="" style={{marginTop: '5rem', paddingLeft: '2.5rem', paddingRight: '2.5rem',}}></img>
                </div>

                <div className="member1_aboutus">
                    <h1 className="member1Heading_aboutus">Member 1</h1>
                    <ul className="member1Content_aboutus">
                        <li>C. Jani, an expert of Restructuring and Project finance looks after Restructuring and Training & Development department.</li> 
                        <li>He has over 40 years of experience in banking sector and held very senior positions in public sector bank.</li>
                        <li>He last position as Executive Director (ED) of IDBI Bank. Worked in Zonal Office and Head Office in different departments such as Refinance, Project Appraisal, sourcing and Syndication, Restructuring of loans, Business Development, Centralized Operations, Branch Operations and Expansions, Retail Banking, Risk, Audit, MIS, IT.</li>
                        <li>He holds a BE degree in Chemical engineering and is an associate of The Indian Institute of Bankers.</li>
                    </ul>
                </div>
            </div>

            <div className="member2_aboutus">

                <div className="member2Start_aboutus">
                    <h1 className="member2Heading_aboutus">Member 2</h1>
                    <ul className="member2Content_aboutus">
                        <li>C. Jani, an expert of Restructuring and Project finance looks after Restructuring and Training & Development department.</li> 
                        <li>He has over 40 years of experience in banking sector and held very senior positions in public sector bank.</li>
                        <li>He last position as Executive Director (ED) of IDBI Bank. Worked in Zonal Office and Head Office in different departments such as Refinance, Project Appraisal, sourcing and Syndication, Restructuring of loans, Business Development, Centralized Operations, Branch Operations and Expansions, Retail Banking, Risk, Audit, MIS, IT.</li>
                        <li>He holds a BE degree in Chemical engineering and is an associate of The Indian Institute of Bankers.</li>
                    </ul>
                </div>

                <div className="teamImage2_aboutus">
                    <img src={ellipse23} alt="" style={{marginTop: '5rem', paddingLeft: '2.5rem', paddingRight: '2.5rem',}}></img>
                </div>
            </div>
        </div>
    )
}

export default AboutUs