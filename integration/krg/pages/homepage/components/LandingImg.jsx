import React from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div`
  position: relative;
  text-align: center;
`;

const LandingImage = styled.img`
   border-radius: 2vw; 
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;


const LandingText = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #c2bdbd;
  width: 90%;
  max-width: 40vw;
  margin: 0 auto;
  font-size: 4vw;
  font-weight: 700;
`;

const LandingImg = () => {
  return (
    <LandingContainer>
      <LandingImage
        src="https://learnfrenchinvancouver.com/wp-content/uploads/Resumee-1154x430.jpg"
        alt="Landing Image"
      />
      <LandingText>KRG Recruiter: Your Gateway to Top Talent</LandingText>
    </LandingContainer>
  );
};

export default LandingImg;
