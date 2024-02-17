import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './companypage_user.css'
// import Herosec from './herosec'
import abg from "./assets/abt-banner2.jpg"
import Herosec_companypage_user from './herosec.jsx'
function Companypage_user() {
  const [count, setCount] = useState(0)

  return (
    <div className='companypage_user_companypage_user'>
      <Herosec_companypage_user
      companyname={"Apple Infotech Pvt"}
      companyimg={abg}
      jobdiscription={`Hi, Greeting from Quess Corp,

      PFB JD
      
      We will maintain a pool of Field Engineers to provide onsite touch support for Reliance Retail outlets for both IT equipment related calls from helpdesk. The specific responsibilities of Field Engineers are given below :
      Provide outside support to Reliance Retail Outlets for all IT calls
      Coordinate with Regional Coordinator for tasks and activities to be performed.
      Perform Periodic Preventive Maintenance activities
    cation and asset tagging and submit report
      Carry out IMAC activity
      Rollout activity
      100% travelling will be there to cater services.
      Bike Mandatory, Travelling Allowances will be provided.
      Age should be below 35.
      
      Payroll: Quess Corp
      Client: Reliance Retail
      Location: CHennai`}
      jobsalary={50000}
      jobtitle={"Web developer"}
      joblocation={"Mumbai"}
      jobexperience={"0-5  years"}
      companylogo={abg}
      jobtype={"Fulltime"}
      jobrole={"Testing"}
      companydiscription={`Quess Corp Limited (Quess) is India’s
leading business services provider, leveraging our extensive domain knowledge and future-ready digital platforms to drive client productivity through outsourced solutions.

We provices provider in the 
country. With 500,000+ employees spread across 9 countries, we 
serve over 3,000 clients. We are proud to achieve this success 
as a 15-year old start-up.

A core value driving our business is constantly making the 
workforce more productive. Our business strategy is aligned 
with this, includin

Established in 2007 and headquartered in Bengaluru, Quess today has an unmatched geographic presence and scale with more than 96 offices across India, South East Asia, North America and the Middle East, backed by technology intensity and domain specialization to create exceptional service experiences.`}
      keyskills={"JavaScript node.js   express  react "}

      />

    </div>
  )
}

export default Companypage_user;