//TrendingSection.jsx

import React from 'react';
import '../../css/RecommendedJobs.css'; // Make sure to adjust the file path
import JobBox from '../../components/landingpage/JobBox'; // Import the JobBox component 

const  TrendingSection= () => {
  return (
    <>
      <div className="recommended-container">
        <div className="rectangle-18">
          <div className="rectangle-17"></div>
        </div>
        <div className="recommended-jobs">Trending Section</div>
      </div>

      <div className="box_class">
      <div className='jobtabs_homepage'>
        <JobBox
          jobTitle="Web Designer"
          salary="3 - 15 L.P.A"
          location="Mumbai"
          description="Exciting opportunity for a skilled web developer. Apply now!"
          imagePath="image-20.png"
        />
        <JobBox
          jobTitle="Web Designer"
          salary="3 - 15 L.P.A"
          location="Mumbai"
          description="Exciting opportunity for a skilled web developer. Apply now!"
          imagePath="image-20.png"
        />
      </div>


      <div className='jobtabs_homepage'>
        <JobBox
          jobTitle="Web Designer"
          salary="3 - 15 L.P.A"
          location="Mumbai"
          description="Exciting opportunity for a skilled web developer. Apply now!"
          imagePath="image-20.png"
        />
        <JobBox
          jobTitle="Web Designer"
          salary="3 - 15 L.P.A"
          location="Mumbai"
          description="Exciting opportunity for a skilled web developer. Apply now!"
          imagePath="image-20.png"
        />
      </div>

      
      

    </div>
   


    </>
  );
};

export default TrendingSection;