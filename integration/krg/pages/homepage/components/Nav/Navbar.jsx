import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import krglogo from '../../cropped-krg-logo-removebg-preview.png'
import { Link } from 'react-router-dom';

const Header = styled.header`
  color: #000;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  margin-left: 2rem;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  padding: 1rem 2rem;
`;

const NavLink = styled.a`
  font-size: 1rem;
  color: #000;
  text-decoration: none;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eee;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled.button`
  background-color: #0385FE;
  color: #fff;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hr = styled.hr`
  border: 1px solid #e5e1e1;
  margin: 0.5px;
  width: 100%;
`;

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Logo src={krglogo} alt="Company Logo" />
        <NavLink ><Link to='/'>Home</Link></NavLink>
        <NavLink ><Link to='/aboutus'>About Us</Link></NavLink>
        <NavLink ><Link to='/contactus'>Contact us</Link></NavLink>
        <NavLink><Link to= '/profile'>My Account</Link></NavLink>
        <Link to="/login"><LoginButton id="login">Login</LoginButton></Link>
      </Nav>
      <Hr />
      {/* Use the Burger component here */}
      <Burger />
    </Header>
  );
}

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import Burger from './Burger';
// import krglogo from '../../cropped-krg-logo-removebg-preview.png';
// import LeftNav from './LeftNav';

// const Header = styled.header`
//   color: #000;
//   padding: 1rem;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Logo = styled.img`
//   width: 100px;
//   margin-left: 2rem;
// `;

// const Nav = styled.nav`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   align-items: center;
//   background-color: #fff;
//   padding: 1rem 2rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

// const NavLink = styled.a`
//   font-size: 1rem;
//   color: #000;
//   text-decoration: none;
//   padding: 1rem;
//   margin: 0.5rem;
//   border-radius: 5px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #eee;
//   }

//   @media (max-width: 768px) {
//     display: ${({ showLinks }) => (showLinks ? 'block' : 'none')};
//   }
// `;

// const LoginButton = styled.button`
//   background-color: #0385FE;
//   color: #fff;
//   padding: 1rem 1.5rem;
//   border: none;
//   border-radius: 30px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }

//   @media (max-width: 768px) {
//     display: ${({ showLinks }) => (showLinks ? 'block' : 'none')};
//   }
// `;
// const Hr = styled.hr`
//   border: 1px solid #e5e1e1;
//   margin: 0.5px;
//   width: 100%;
// `;  

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       setShowLinks(window.innerWidth > 768);
//     };

//     // Initial check on mount
//     handleResize();

//     // Event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const isBurgerActive = !showLinks; // Determine if the burger is active

//   return (
//     <Header>
//       <Nav>
//         <Logo src={krglogo} alt="Company Logo" />
//         {showLinks && (
//           <>
//             <NavLink href="index.html">Home</NavLink>
//             <NavLink href="About Us/index.html">About Us</NavLink>
//             <NavLink href="Contact-Us.html">Contact us</NavLink>
//             <NavLink href="profilepage.html">My account</NavLink>
//           </>
//         )}
//         {/* Ensure LoginButton is rendered when showLinks is false (screen is shorter) and burger is not active */}
//         {!isBurgerActive && (
//           <LoginButton id="login" showLinks={!showLinks}>
//             Login
//           </LoginButton>
//         )}
//       </Nav>
//       <Hr />
//       {/* Use the Burger component here */}
//       <Burger showLinks={showLinks}>
//         {showLinks && (
//           <>
//             <NavLink href="index.html">Home</NavLink>
//             <NavLink href="About Us/index.html">About Us</NavLink>
//             <NavLink href="Contact-Us.html">Contact us</NavLink>
//             <NavLink href="profilepage.html">My account</NavLink>
//           </>
//         )}
//       </Burger>
//       {/* Render the LoginButton inside LeftNav when the burger is active */}
//       {isBurgerActive && (
//         <LeftNav open={isBurgerActive}>
//           <li>
//             <NavLink href="index.html">Home</NavLink>
//           </li>
//           <li>
//             <NavLink href="About Us/index.html">About Us</NavLink>
//           </li>
//           <li>
//             <NavLink href="Contact-Us.html">Contact us</NavLink>
//           </li>
//           <li>
//             <NavLink href="profilepage.html">My account</NavLink>
//           </li>
//           <li>
//             <LoginButton id="login" showLinks={!showLinks}>
//               Login
//             </LoginButton>
//           </li>
//           {/* Add more navigation links as needed */}
//         </LeftNav>
//       )}
//     </Header>
//   );
// };

// export default Navbar;
