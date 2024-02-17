import { useState } from 'react'

import './Contactus.css'
import Banner_contactus from "./banner_contactus.jsx"
import Contactformdiv_contactus from "./contactformdiv_contactus.jsx"
// import Contactinfo from "./contactinfo_contactus.jsx"
import Contactmap_contactus from "./contactmap_contactus.jsx"
import Contactinfo_contactus from './contactinfo_contactus.jsx'

function Contactus() {


  return (
    <>
      <Banner_contactus/>


      <Contactinfo_contactus/>
      <Contactformdiv_contactus/>



      <Contactmap_contactus/>

    </>
  )
}

export default Contactus
