import React from 'react';
import './JobDetails.css'; // Import the CSS file with styles

const JobDetails  =()=>  {
  /*
  const {
    salary,
    jobType,
    industry,
    functionalArea,
    role,
    employmentType,
  } = props;
  */

  return (
    <div className="jobDetailsContainer">
      
      <table className="jobDetailsTable">
        <tbody>
          <tr>
            <td><strong>Salary</strong></td>
            <td><input type="text" required placeholder="Enter salary" /></td>

          </tr>
          <tr>
            <td><strong>Type of job</strong></td>
            <td><input type="text" required placeholder="Enter job type" /></td>
          </tr>
          <tr>
            <td><strong>Industry</strong></td>
            <td><input type="text" required placeholder="Enter industry" /></td>
          </tr>
          <tr>
            <td><strong>Functional Area</strong></td>
            <td><input type="text" required placeholder="Enter functional area" /></td>
          </tr>
          <tr>
            <td><strong>Role</strong></td>
            <td><input type="text" required placeholder="Enter role" /></td>
          </tr>
          <tr>
            <td><strong>Employment Type</strong></td>
            <td><input type="text" required placeholder="Enter employment type" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JobDetails;