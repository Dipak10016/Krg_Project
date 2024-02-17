import { useState } from 'react'



import "./Registrationpage.css"
// import Login2 from './login2.jsx'
import RegistrationForm from './RegistrationForm.jsx'
// import Sidebarmobile from './sidebarmobile.jsx'
// import Card from './components/card.jsx'
function Registrationpage() {
  // const [count, setCount] = useState(0)
  // let myarray=[1,2,3,4,5]
  // let visible = false;
  return (
    <>
    <div className="registrationformdiv">
        <div className="regformdiv2">

            <RegistrationForm/>
        </div>
    </div>

    </>
  )
}

export default Registrationpage
