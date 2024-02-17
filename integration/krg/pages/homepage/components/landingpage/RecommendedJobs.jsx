// RecommendedJobs.js
import React from 'react';
import '../../css/RecommendedJobs.css';
import JobBox from '../../components/landingpage/JobBox'; // Import the JobBox component
// import image20 from '../../jobimg.jpg';


const RecommendedJobs = () => {
  return (
    <>
      <div className="recommended-container">
        <div className="rectangle-18">
          <div className="rectangle-17"></div>
        </div>
        <div className="recommended-jobs">Recommended jobs</div>
      </div>
<div className="box_class">
      <div className='jobtabs_homepage'>
        <JobBox
          jobTitle="Web Designer"
          salary="3 - 15 L.P.A"
          location="Mumbai"
          description="Exciting opportunity for a skilled web developer. Apply now!"
          imagePath="image-20.png"
          className="web-developer-box"
        />
        <JobBox
          jobTitle="Web Designer"
          salary="3 - 15 L.P.A"
          location="Mumbai"
          description="Exciting opportunity for a skilled web developer. Apply now!"
          imagePath="image-20.png"
          className="web-developer-box"
        />
      </div>

      <div className='jobtabs_homepage'>
        <JobBox
          jobTitle="Web Designer"
          salary="3 - 15 L.P.A"
          location="Mumbai"
          description="Exciting opportunity for a skilled web developer. Apply now!"
          imagePath="image-20.png"
          className="web-developer-box"
        />
        <JobBox
          jobTitle="Web Designer"
          salary="3 - 15 L.P.A"
          location="Mumbai"
          description="Exciting opportunity for a skilled web developer. Apply now!"
          imagePath="image-20.png"
          className="web-developer-box"
        />
      </div>
  </div>

    </>
  );
};

export default RecommendedJobs;
