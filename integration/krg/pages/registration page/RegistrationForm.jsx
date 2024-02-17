import React, { useState } from 'react';
import './RegistrationForm.css'; 
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [residentialCity, setResidentialCity] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [education, setEducation] = useState('');
  const [professionalMembership, setProfessionalMembership] = useState('');
  const [membershipNumber, setMembershipNumber] = useState('');
  const [currentJobDesignation, setCurrentJobDesignation] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any additional logic here, such as form validation or API submission
    // For now, just log the form data
    console.log({
      firstName,
      middleName,
      lastName,
      residentialCity,
      residentialAddress,
      personalEmail,
      workEmail,
      mobileNumber,
      whatsappNumber,
      education,
      professionalMembership,
      membershipNumber,
      currentJobDesignation,
      resume,
    });
  };

  return (
    <div className="container_registrationpage">
      <h1 className="text-3xl_registrationpage font-semibold_registrationpage">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Info */}
        <div className="form-group_registrationpage">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="middleName">Middle Name:</label>
          <input type="text" id="middleName" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>

        {/* Residential Info */}
        <div className="form-group_registrationpage">
          <label htmlFor="residentialCity">Residential City:</label>
          <input type="text" id="residentialCity" value={residentialCity} onChange={(e) => setResidentialCity(e.target.value)} required />
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="residentialAddress">Residential Address:</label>
          <textarea id="residentialAddress" value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} required />
        </div>

        {/* Contact Info */}
        <div className="form-group_registrationpage">
          <label htmlFor="personalEmail">Personal Email:</label>
          <input type="email" id="personalEmail" value={personalEmail} onChange={(e) => setPersonalEmail(e.target.value)} required />
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="workEmail">Work Email:</label>
          <input type="email" id="workEmail" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} />
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="mobileNumber">Mobile Phone Number:</label>
          <input type="tel" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="whatsappNumber">WhatsApp Number:</label>
          <input type="tel" id="whatsappNumber" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} />
        </div>

        {/* Professional Info */}
        <div className="form-group_registrationpage">
          <label htmlFor="education">Education:</label>
          <input type="text" id="education" value={education} onChange={(e) => setEducation(e.target.value)} />
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="professionalMembership">Membership of Professional Body:</label>
          <input type="text" id="professionalMembership" value={professionalMembership} onChange={(e) => setProfessionalMembership(e.target.value)} />
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="membershipNumber">Membership Number:</label>
          <input type="text" id="membershipNumber" value={membershipNumber} onChange={(e) => setMembershipNumber(e.target.value)} />
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="currentJobDesignation">Current Job Designation:</label>
          <input type="text" id="currentJobDesignation" value={currentJobDesignation} onChange={(e) => setCurrentJobDesignation(e.target.value)} />
        </div>

        {/* Resume Upload */}
        <div className="form-group_registrationpage">
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" onChange={(e) => setResume(e.target.files[0])} />
        </div>

        {/* Submit Button */}
        <Link to='/login'><button type="submit" className="create-account-btn_registrationpage">
          Submit
        </button></Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
