import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 2rem;
  color : white
`;

const Section = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  padding-top: 1rem;
  text-align: center;
  justify-content:center;
  margin-bottom: 1rem;
  color:white;
`;

const SectionHeading = styled.div`
  font-size: 1.5rem;

  color: #ccc;
  color:white;
`;

const SectionContent = styled.div`
  font-size: 1rem;
  display:flex;
  justify-content:center;
  color: #ccc;
  color:white;
  // width:50%;
`;

const FooterLinks = () => {
  return (
    <LinksContainer>
      <Section>
        <SectionHeading>About Us</SectionHeading>
        <SectionContent>
          <Link to = '/aboutus' style={{color: "white",}}>Who are we? </Link>
        </SectionContent>
        <SectionContent>
          <Link to = '/aboutus' style={{color: "white",}}>Why KRG? </Link>
        </SectionContent>
      </Section>
      <Section>
        <SectionHeading>Quick Links</SectionHeading>
        <SectionContent>
          <a href="/" style={{color: "white",}}>Home </a>
        </SectionContent>
        <SectionContent>
          <Link to = '/contactus' style={{color: "white",}}>Contact Us</Link>
        </SectionContent>
      </Section>
      {/* <Section>
        <SectionHeading>Grievances</SectionHeading>
        <SectionContent>
          <a href="/report-issue">Report an issue </a>
          <a href="/help-center">Help Center </a>
          <a href="/fraud-alert">Fraud Alert</a>
        </SectionContent>
      </Section> */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: '2rem', color: '#ccc' }}>
        This website was developed with ❤️ by Interns from SIES GST, Nerul
      </div>
    </LinksContainer>
  );
};

export default FooterLinks;
