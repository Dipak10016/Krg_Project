import { useState } from 'react'


import "./signuppage.css"
// import "./SignUpForm.js"
// import Login2 from './login2.jsx'
// import RegistrationForm from './RegistrationForm.jsx'
import SignUpForm from "./SignUpForm.jsx"
// import Sidebarmobile from './sidebarmobile.jsx'
// import Card from './components/card.jsx'
function Signuppage() {
  // const [count, setCount] = useState(0)
  // let myarray=[1,2,3,4,5]
  // let visible = false;
  return (
    <>
    <div className="signupformdiv">
        <div className="supformdiv2">

            <SignUpForm/>
        </div>
    </div>

    </>
  )
}

export default Signuppage;
