import React from 'react';
import './JobDescription.css'; // Import the CSS file with styles
import { FaMapMarkerAlt, FaBriefcase, FaRegClock, FaBookOpen, FaTools, FaUserCog } from 'react-icons/fa'; // Import icons from react-icons/fa

const JobDescription = () => {
 /*
  const keySkills = [
    'Networking',
    'Desktop',
    'CCNA',
    'Troubleshoot',
    'Field Engineer',
    'Hardware',
  ];
*/
  return (
    <div className="jobDescriptionContainer">
      <div className="section">
       
        <div>
        <input type="text"  required placeholder="Enter job title" />
        {/* 
          <h2><FaBriefcase className="icon" /> Field Engineer</h2>
          <p><FaMapMarkerAlt className="icon" /> Bengaluru / Bangalore, Chennai</p>
          <p><FaRegClock className="icon" /> 0 - 5 years experience</p>
        */}
        </div>
      </div>

     {/*  <button className="applyButton">Apply Now</button> */}

      <div className="section">
      
        <div>
         
           <h3><FaBookOpen className="icon" /> Job Description</h3>
           
        </div>
        
        <input type="text"  required placeholder="Enter Job Description" />

      </div>

      <div className="section">
       
        <div>
          <h3><FaTools className="icon" /> Keyskills</h3>
         {/* <div className="keySkillsContainer">
            {keySkills.map((skill, index) => (
              <button key={index} className="keySkillButton">
                {skill}
              </button>
            ))}
          </div> */}
           <input type="text" required  placeholder="Enter keyskills" />
        </div>
      </div>

     {/*  <button className="applyButton">Apply Now</button>  */}

      <div className="section">
       
        <div>
          <h3><FaTools className="icon" /> About Company</h3>
       {/*
          <p>
            Quess Corp Limited (Quess) is India’s leading business services provider, leveraging our extensive domain knowledge and future-ready digital platforms to drive client productivity through outsourced solutions.
           
          </p>
          <p>
            We provide a host of technology-enabled staffing and managed outsourcing services across processes such as sales & marketing, customer care, after-sales service, back office operations, telecom operations, manufacturing operations, facilities and security management, HR & F&A operations, IT & mobility services, etc.
          </p>

          <p>
            Our passion for delivering exceptional services, augmented by proprietary digital platforms, has strongly established our credentials as India’s largest employer in the private sector and the biggest integrated business services provider in the country. With 500,000+ employees spread across 9 countries, we serve over 3,000 clients. We are proud to achieve this success as a 15-year old start-up.
          </p>

          <p>
            A core value driving our business is constantly making the workforce more productive. Our business strategy is aligned with this, including training and skill development for better employability, helping job seekers easily find employment opportunities, digitising workflows, and providing social security benefits to a wider employable population.
          </p>

          <p>
            Established in 2007 and headquartered in Bengaluru, Quess today has an unmatched geographic presence and scale with more than 96 offices across India, South East Asia, North America, and the Middle East, backed by technology intensity and domain specialization to create exceptional service experiences.
          </p>
*/}

        <input type="text"  required placeholder="Enter details about company" />
        
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
