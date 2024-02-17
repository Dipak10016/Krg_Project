// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../css/Domain.css';
import img1 from './img1.jpeg';
import img2 from './img2.jpg';

const TestimonialSection= () => {
    return (
      <>
        <section>
<div className="recommended-container">
  <div className="rectangle-18">
      <div className="rectangle-17"></div>
  </div>
  <div className="recommended-jobs">Testimonials</div>
</div>


<div className="testimonials">
        <div className="row">
          <div className="col">
            <div className="testimonial">
            <img className="" src={img1} alt="Job" />
              <div className="name">Noor Sayyed</div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
            <img className="" src={img2} alt="Job" />
              <div className="name">Kshitij Singh</div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img className="" src={img1} alt="Job" />
              <div className="name">Sahil Brid</div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
        </div>
</section>
      </>
    );
  };
  
  export default TestimonialSection;