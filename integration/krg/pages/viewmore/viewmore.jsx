import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './viewmore.css'
// import RecommendedJobs from "./RecommendedJobs.jsx"
import JobBox from './JobBox.jsx'
function Viewmore() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="heading">
      <div className="recommended-container">
          <div className="rectangle-18">
            <div className="rectangle-17"></div>
          </div>
          <div className="recommended-jobs">Recommended jobs</div>
        </div>
    </div>
    <div className="jobsection">
      <div className="jobcards">

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
          <JobBox
            jobTitle="Web Designer"
            salary="3 - 15 L.P.A"
            location="Mumbai"
            description="Exciting opportunity for a skilled web developer. Apply now!"
            imagePath="image-20.png"
          />

      </div>
      <div className="nextnprev_viewmore">
        <button>prev</button>
        <button>next</button>
      </div>

      </div>
    </>
  )
}

export default Viewmore