import React, { useState } from 'react';
import RegistrationForm from '../registration page/RegistrationForm.jsx';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccountClick = () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
    // Attempt to create the account
    const accountCreated = createAccount();
  
    // Show the RegistrationForm modal only if the account creation was successful
    if (accountCreated) {
      setShowRegistrationForm(true);
    }
  };

  const handleCloseRegistrationForm = () => {
    // Close the RegistrationForm modal
    setShowRegistrationForm(false);
  };

  const createAccount = () => {
    // Rest of the code for checking password strength and creating the account
    const isStrongPassword = checkPasswordStrength(password);
  
    if (!isStrongPassword) {
      alert("Weak password. Please ensure your password meets the criteria.");
      return false; // Return false to indicate account creation failure
    }
    return true; // Return true to indicate successful account creation
  };

  const checkPasswordStrength = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numericRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
    const minLength = 8;

    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasNumeric = numericRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);
    const hasMinLength = password.length >= minLength;

    const strengthScore = [
      hasUppercase,
      hasLowercase,
      hasNumeric,
      hasSpecialChar,
      hasMinLength,
    ].filter(Boolean).length;

    const strengthText = getStrengthText(strengthScore);
    alert(`Password strength: ${strengthText}`);

    return strengthScore === 5;
  };

  const getStrengthText = (score) => {
    switch (score) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Moderate";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "";
    }
  };

  const signUpWithGmail = () => {
    alert("Signing up with Gmail...");
  };

  const signUpWithApple = () => {
    alert("Signing up with Apple ID...");
  };

  return ( 
    <div className="container_signup">
    <div className={`main-container_signup ${showRegistrationForm ? 'blur-background' : ''}`}>
        <div id="header"></div>
        <h1 className="text-3xl font-semibold">Sign-up</h1>
        <h5 className="text-sm">Enter your Details Below</h5>
      
        <form className="my-4">
          <div className="form-group_signup">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group_signup">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group_signup">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="button" className="create-account-btn_signup" onClick={handleCreateAccountClick}>
            <Link to="/register">Create Account</Link>
          </button>
        </form>
     
      
        <p className="text-sm">Already have an account? <Link to='/login' className="text-blue-500">Login</Link></p>
      
        <div className="social-buttons my-4">
          <img src="images/Google.png" alt="Sign up with Gmail" onClick={signUpWithGmail} />
          <img src="images/apple.jpg" alt="Sign up with Apple ID" onClick={signUpWithApple} />
        </div>
        <div id="footer"></div>
        {showRegistrationForm && (
          <div className="modal">
            <span className="close" onClick={handleCloseRegistrationForm}>
              &times;
            </span>
            <div className="modal-content">
              <RegistrationForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
