import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #FAFBFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    overflow: auto;
    height: 95vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  color: #000;
  text-decoration: none;
  padding: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eee;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 1.5rem 0; /* Adjusted margin to increase space */
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <NavItem><NavLink ><Link to='/'>Home</Link></NavLink></NavItem>
      <NavItem><NavLink ><Link to='/aboutus'>About Us</Link></NavLink></NavItem>
      <NavItem><NavLink ><Link to='/contactus'>Contact Us</Link></NavLink></NavItem>
      <NavItem><NavLink ><Link to='/profile'>My Account</Link></NavLink></NavItem>
      <NavItem><NavLink ><Link to='/login'>Login</Link></NavLink></NavItem>
      {/* Add more navigation links as needed */}
    </Ul>
  );
};

export default LeftNav;





// import React from 'react';
// import styled from 'styled-components';

// const Ul = styled.ul`
//   list-style: none;

//   @media (max-width: 768px) {
//     flex-flow: column nowrap;
//     background-color: #FAFBFF;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//     position: fixed;
//     transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
//     top: 0;
//     right: 0;
//     overflow: auto;
//     height: 95vh;
//     width: 300px;
//     transition: transform 0.3s ease-in-out;
//     z-index: 1;
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

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// const LeftNav = ({ open }) => {
//   return (
//     <Ul open={open}>
//       <li><NavLink href="index.html">Home</NavLink></li>
//       <li><NavLink href="About Us/index.html">About Us</NavLink></li>
//       <li><NavLink href="Contact-Us.html">Contact us</NavLink></li>
//       <li><NavLink href="profilepage.html">My account</NavLink></li>
//       <li><NavLink href="#">Login</NavLink></li>
//       {/* Add more navigation links as needed */}
//     </Ul>
//   );
// }

// export default LeftNav;



