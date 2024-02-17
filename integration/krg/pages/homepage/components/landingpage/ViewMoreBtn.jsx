// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../css/RecommendedJobs.css'; // Make sure to adjust the file path
import JobBox from './JobBox'; // Import the JobBox component
import { Link } from 'react-router-dom';

const ViewMoreBtn= () => {
  return (
    <>
    
    <br></br><br></br>
      <section>
        <div className="view-more-button-div555">
          <Link to='/viewmore'><button className="view-more-button555">View More</button></Link>
        </div>
      </section>
    </>

);
};

export default ViewMoreBtn;