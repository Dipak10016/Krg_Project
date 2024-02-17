import { useState } from 'react'
import './companypage_comp.css'
import Topbox from './assets/components/Topbox.jsx'
import Photo from './assets/components/Photo.jsx'
import JobDetails from './assets/components/JobDetails.jsx'
import JobDescription from './assets/components/JobDescription.jsx'

  const Companycomp = () => {
   /*
    const companyInfo = {
      salary: '500,000',
      jobType: 'Contractual Job',
      industry: 'Software Development',
      functionalArea: 'IT- Software/ Development & Maintenance',
      role: 'Software Developer',
      employmentType: 'Part time',
    };*/
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      alert('Form submitted successfully!');
    }
  
  return (    
    <>
      <div>
        <form onSubmit={handleSubmit} method="post">
        <Topbox />
        <Photo />
        <div>
      <JobDetails /*{...companyInfo} *//>
      <JobDescription/>
      
    </div>

      <button className="save" value="Submit" type='submit'>Submit</button> 
    </form> 
      </div>
      
    </>
  )
}

export default Companycomp
