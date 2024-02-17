import React,{useState} from 'react';
import './Form.css'

function Form() {

  const [fname, setfName] = useState('');
  const [fnameError, setfNameError] = useState('');
  const [lname, setlName] = useState('');
  const [lnameError, setlNameError] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [addressError, setaddressError] = useState('')
  const [address, setaddress] = useState('')
  // ... (similar state variables for other form fields)

  const [previewImage, setPreviewImage] = useState('OIP.jpeg');
  const [formMaxWidth, setFormMaxWidth] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (validateForm()) {
      // Add your form submission logic here
      alert('Form submitted successfully!');
    }
  }


  const validateForm = () => {
    let isValid = true;
    // Validate first name
    if (!isValidName(fname)) {
      setfNameError('*Enter correct First name');
      isValid = false;
    } else {
      setfNameError('');
    }

    // Validate last name
    if (!isValidName(lname)) {
      setlNameError('*Enter correct last name');
      isValid = false;
    } else {
      setlNameError('');
    }

     // Validate email length
     if (email.length > 35) {
      setEmailError('*Email is too long');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate address length
     if (address.length < 10) {
     setaddressError('*Address is too short');
     isValid = false;
     } else {
      setaddressError('');
      }

    // Validate password and confirm password
    if (newPassword !== confirmPassword) {
      setPasswordError('*Passwords do not match');
      setConfirmPasswordError('*Passwords do not match');
      isValid = false;
    } else {
      setPasswordError('');
      setConfirmPasswordError('');
    }

    return isValid;
  };
 

  const isValidName = (name) => {
    return /^[A-Za-z ]{3,}$/.test(name);
  };


  const previewFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormMaxWidth(reader.result.width + 20);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    // Clear form fields and error messages
    setfName('');
    setlName('');
    setEmail('');
    setNewPassword('');
    setConfirmPassword('');
    setfNameError('');
    setlNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setaddress('');
    setaddressError('');
  };


  return (
    <div className='profile_ma'>
      
      <form  className="profile_form-container"  name="myForm" onSubmit={handleSubmit} method="post">
        <div className="profile_col-75" >
          <div className="profile_container">
            <span className="profile_edit">Edit Profile</span>
            <div className="profile_image">
              <img src={previewImage} className="profile_rounded-circle" id="profileImagePreview" alt="Profile" />
            </div>

            <div className="profile_p-image">
              <i className="fa fa-camera upload-button" onClick={() => document.getElementById('profileImage').click()}></i>
              <input  className="profile_file-upload" type="file" id="profileImage" onChange={previewFile} accept="image/*" />
              <span><i className='bx bxs-camera-plus'></i></span>
            </div>
<br></br>
            <div className="profile_row">
              <div className="profile_col-50">
                <div id="name">
                  <label htmlFor="fname">First name</label>
                  <input type="text"
                   name="fname" 
                   required 
                   placeholder="Md"
                   value={fname}
                   onChange={(e) => setfName(e.target.value)} />
                  <div className="profile_formerror">{fnameError}</div>
                </div>
                {/* Other form fields */}
                <div id="email">
                          <label>Email</label>
                          <input type="text" 
                          name="femail" 
                          required placeholder="rimel1111@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                          <div className="profile_formerror">{emailError}</div>
                      </div>
                      <label>Password</label>
                      <div id="pass">
                          <input type="text" 
                          name="pass" 
                          required placeholder="Current Password" 
                          />
                          <div className="profile_formerror"></div>
                      </div>
                      <label>New Password</label>
                      <div id="npass">
                          <input type="text" 
                          name="npass" 
                          required placeholder="New Password" 
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}/>
                          <div className="profile_formerror">{passwordError}</div>
                      </div>
                      <label>Confirm Password</label>
                      <div id="cpass">
                          <input type="text" 
                          name="cpass"  
                          required placeholder="Confirm Password" 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}/>
                          <div className="profile_formerror">{confirmPasswordError}</div>
                      </div>
              </div>
              <div className="profile_col-50">
                {/* Other form fields */}
                <div id="name2">
                      <label>Last name</label>
                      <input 
                      type="text" 
                      name="lname" 
                      required 
                      placeholder="Rimel"
                      value={lname}
                      onChange={(e) => setlName(e.target.value)}/>
                      <div className="profile_formerror">{lnameError}</div>
                      </div>
                      <div id="add">
                      <label>Address</label>
                      <input 
                      type="text" 
                      name="add" 
                      required placeholder="Kingston, 5236, United States" 
                      value={address}
                      onChange={(e) => setaddress(e.target.value)} />
                      <div className="profile_formerror">{addressError}</div>
                    </div>
                  
              </div>
            </div>
            <button className="profile_save" value="Submit" type='submit'>Save changes</button>
            <button className="profile_cancel" type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
        </form>
    </div>
  );
}

export default Form;
