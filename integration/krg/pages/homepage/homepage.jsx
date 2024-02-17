import React from 'react';
import Navbar from './components/Nav/Navbar';
import Footer from './components/footer/Footer';
import Searchbar from './components/SearchBar';
import LandingImg from './components/LandingImg';
import RecommendedJobs from './components/landingpage/RecommendedJobs';  
import ViewMoreBtn from './components/landingpage/ViewMoreBtn';
import TrendingSection from './components/landingpage/TrendingSection';
import DomainSection from './components/domains/domain';
import CompanySection from './components/CompanySection/Company';
import TestimonialSection from './components/Testimonials/Testimonial';
import BannerSection from './components/Banner/banner';

function Homepage() {
  return (
    <div>
      {/* Other components or content can be added here */}
      {/* <Navbar /> */}
      <Searchbar/>
      <LandingImg/>
      <RecommendedJobs/>
      <DomainSection/>
      <ViewMoreBtn/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TrendingSection />
      <BannerSection/>
      <CompanySection/>
      <TestimonialSection/>

      {/* <Footer /> */}
      {/* Other components or content can be added here */}
    </div>
  );
}

export default Homepage;

