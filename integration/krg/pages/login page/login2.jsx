import { useState } from 'react';
import './login.css';
import Loginimg from './assets/login-10.png';
import { Link } from 'react-router-dom';

function Login2() {
  const [role, setRole] = useState(""); // State to store the selected role

  return (
    <>
      <div className="main_loginpage_company">
        <div className="heroimg_loginpage_company">
          <img className='heroimg2_loginpage_company' src={Loginimg} alt="" />
        </div>
        <div className="form-container_loginpage_company">
          <form action="process_form.php" method="post" enctype="multipart/form-data">
            <div className="form-group_loginpage_company">
              <label htmlFor="companyName2">Company Name:</label>
              <input type="text" id="companyName2" name="companyName" required />
            </div>

            <div className="form-group_loginpage_company">
              <label htmlFor="role2">Role:</label>
              <select id="role2" name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="">Select Role</option>
                <option value="Company">Company</option>
                <option value="Consultant">Consultant</option>
              </select>
            </div>

            <div className="form-group_loginpage_company">
              <label htmlFor="email2">Email:</label>
              <input type="email" id="email2" name="email" required />
            </div>

            <div className="form-group_loginpage_company">
              <label htmlFor="location2">Location:</label>
              <input type="text" id="location2" name="location" required />
            </div>

            <div className="form-group_loginpage_company">
              <label htmlFor="document2">Upload Document:</label>
              <input type="file" id="document2" name="document" accept=".pdf, .doc, .docx" />
            </div>

            <div className="form-group_loginpage_company">
              <Link to='/'><button type="submit">Submit</button></Link>
            </div>
          </form>
        </div>
      </div>
      <div className="footer_loginpage_company">
        {/* <div className="footer-links_loginpage_company">
          <Link to='/aboutus'>About Us</Link>
          <a href="#terms-and-conditions">Terms and Conditions</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#faq">FAQ</a>
          <Link to='/contactus'>Contact Us</Link>
        </div> */}
      </div>
    </>
  )
}

export default Login2;
