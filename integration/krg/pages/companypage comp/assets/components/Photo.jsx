import React from 'react'
import './Photo.css'
import Pagephoto from "./pagephoto.jpg"
function Photo() {
  return (
    <div className='pagephoto_companypage'
    style={{
      // backgroundImage:{abg},/ 
      height: "45vh",width:"100%", backgroundRepeat: "no-repeat",backgroundPosition:"center",backgroundSize:"cover"
  }}
    >
      <img src={Pagephoto} alt='photo' />
    </div>
  )
}

export default Photo