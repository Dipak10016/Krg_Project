import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import Form from './components/Form.jsx';
import Sidebar from './components/Sidebar.jsx';
import Banner from './components/Banner.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  /*
  const [previewImage, setPreviewImage] = useState('./profile photo.jpeg');

  useEffect(() => {
    // Fetching and rendering header
    fetch('header and footer/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
      });
  }, []);

  const clearErrors = () => {
    const errors = document.getElementsByClassName('Formerror');
    for (let item of errors) {
      item.innerHTML = '';
    }
  };

  const seterror = (id, error) => {
    const element = document.getElementById(id);
   const Formerror = element.getElementsByClassName('Formerror')[0];
   if (Formerror) {
    Formerror.innerHTML = error;
  }
  };

  const validateForm = () => {
    let returnval = true;
    clearErrors();

    let name = document.Forms['myForm']["fname"].value;
    const number = /[0-9]/g;

    if (name.match(number) && name.length <= 2) {
      seterror("name", "*enter correct name");
      returnval = false;
    }

    
    let name2 = document.Forms['myForm']["lname"].value;
    if (name2.match(number) && name2.length<=2) {
        seterror("name2", "*enter correct lastname");
        returnval = false;
    }

    let email = document.Forms['myForm']["femail"].value;
    if (email.length >= 30) {
        seterror("email", "*Email is too long");
        returnval = false;
    }

    let npass = document.Forms['myForm']["npass"].value;
    if (npass.length == 7) {
        seterror("npass", "*Password should be of 8 digits");
        returnval = false;
    }

    let cpass = document.Forms['myForm']["cpass"].value;
    if (cpass != npass) {
        seterror("cpass", "*Password should be same as new password");
        returnval = false;
    }

    let add = document.Forms['myForm']["add"].value;
    if (add.match(number) && add.length<6) {
        seterror("add", "*enter correct address");
        returnval = false;
    }

    // Add similar validation for other fields

    return returnval;
  };

  const previewFile = () => {
    const preview = document.getElementById('profileImagePreview');
    const fileInput = document.getElementById('profileImage');
    const file = fileInput.files[0];
    

 

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        preview.src = reader.result;
        adjustFormSize(preview.width);
      };
      reader.readAsDataURL(file);
    }
  };

  const adjustFormSize = (imageWidth) => {
    const FormContainer = document.querySelector('.Form-container');
    if (FormContainer){
    FormContainer.style.maxWidth = `${imageWidth + 20}px`;
    }
  };
*/
  return (
    <div>
      {/* Rendered header */}
      <div id="header"></div>
      <Sidebar />
      
      <Form />
      <Banner />    
      </div>
  )
  };

export default App ;
