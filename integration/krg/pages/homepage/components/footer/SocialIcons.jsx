import React from 'react';
import styled from 'styled-components';
import krglogo from './images/cropped-logo2021-p94lplagffxicfcchvengaavrgtc6kx3s973in06wi.jpeg'
import facebook from './images/facebook.png'
import insta from './images/insta.jpeg'
import linkedin from './images/linkedin.png'
import x from './images/twitter.png'

const IconsContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 1rem;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0.5rem 1rem 0.5rem 0;
`;

const SocialIcons = () => {
  return (
    <IconsContainer>
      <IconContainer>
        <img src={krglogo} alt="" width="250px" height="200px" />
      </IconContainer>
      <SocialLinks>
        <Icon src={facebook} alt="Facebook"/>
        <Icon src = {insta} alt="Instagram" />
        <Icon src={x} alt="Twitter" />
        <Icon src= {linkedin} alt="LinkedIN" />
      </SocialLinks>
    </IconsContainer>
  );
};

export default SocialIcons;
