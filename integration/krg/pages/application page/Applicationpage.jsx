import { useState } from 'react'
import Jobtab_applicationpage from './jobtab_applicationpage.jsx'
import './Applicationpage.css'
import Banner_applicationpage from './banner_applicationpage.jsx'
import Sidebar_applicationpage from './sidebar_applicationpage.jsx'
import Menuicon from './assets/menu.png'
import Sidebarmobile from './sidebarmobile.jsx'

function Applicationpage() {

  return (
    <>
    {/* <div className="secondnav"> */}
      {/* <button
      >
        <img src={Menuicon} alt="" width="25px" height="15px" />
      </button>
    </div> */}
      <Sidebarmobile />

    <div className='main_applicationpage'>
      <Sidebar_applicationpage/>
      <div className='jobsection_applicationpage'>

        <Jobtab_applicationpage 
        jobtitle={"Web Designer"}
        salary = {"$ 35 - 45 K"}
        location={"Mumbai"}
        jobdiscription={"Lor sit amet consectetur afdh dsh dhfh sdhem illo harum praesentium iste porro. Aliquid, ut! Doloribus, quod sint."}
        status={"Phone interview"}
        />
        <Jobtab_applicationpage 
        jobtitle={"Web Designer"}
        salary = {"$ 35 - 45 K"}
        location={"Mumbai"}
        jobdiscription={"Lor sit amet consectetur afdh dsh dhfh sdhem illo harum praesentium iste porro. Aliquid, ut! Doloribus, quod sint."}
        status={"Phone interview"}
        />
        <Jobtab_applicationpage 
        jobtitle={"Web Designer"}
        salary = {"$ 35 - 45 K"}
        location={"Mumbai"}
        jobdiscription={"Lor sit amet consectetur afdh dsh dhfh sdhem illo harum praesentium iste porro. Aliquid, ut! Doloribus, quod sint."}
        status={"Phone interview"}
        />
        <div className="nextbutton_applicationpage">
                <button>prev</button>
                <button>next</button>
        </div>
      </div>
    </div>
    <Banner_applicationpage />


    </>
  )
}

export default Applicationpage
