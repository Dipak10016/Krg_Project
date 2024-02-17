// JobBox.jsx
import React from 'react';
import image30 from './assets/image-30.png';
import image20 from './assets/image-20.png';
import './RecommendedJobs.css'; 


const JobBox = ({ jobTitle, salary, location, description, imagePath }) => {
  return (
    <div className="box">
      <div className="frame-6">
      <img className="image-2" src={image20} alt="Job" />
        <div className="line-3"></div>
        <div className="text-scale">
          <div className="_5">{jobTitle}</div>
        </div>
        <div className="text-scale2">
          <div className="_6">{salary}</div>
        </div>
        
        <div className="text-scale3">
          <div className="_6">{location}</div>
        </div>
        <div className="frame-7">
          <div className="text-scale4">
            <div className="_6">{description}</div>
          </div>
        </div>
        <img className="image-33" src={image30} alt="Random" />
        <div className="rectangle-28"></div>
      </div>
    </div>
  );
};

export default JobBox;
