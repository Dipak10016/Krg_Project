import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';
import FooterLinks from './FooterLinks';

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons />
      <FooterLinks />
    </FooterContainer>
  );
};

export default Footer;
