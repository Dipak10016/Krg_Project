import React from 'react'

import './contactinfo_contactus.css'
import Image2zpv from "./assets/image-2-zPv.png"
import Image2qti from "./assets/image-2-qTi.png"
import Image2bqn from "./assets/image-2-BqN.png"
import Image2 from "./assets/image-2.png"

function Contactinfo_contactus() {

  return (
    <>
        <div className="contactinfo_contactus">
                <div className="phone_contactus">
                <img className="image-2-dmN_contactus" src={Image2zpv} />
                <div className="phonesubdiv_contactus">
                        <p className="phonetext_contactus">Phone no:</p>
                        <p className="phoneno_contactus">+91 9004527779</p>
                </div>
                </div>
                <div className="email1_contactus">
                    <img className="image-2-aEg_contactus" src={Image2qti} />
                    <div className="emailsubdiv_contactus">
                        <p className="emailtext_contactus">Email address</p>
                        <p className="emailadderss_contactus">info@krgconsultants.com</p>
                    </div>
                </div>
                <div className="linkedin_contactus">
                <img className="image-2-CfN_contactus" src={Image2bqn}/>
                <div className="linkedinsubdiv_contactus">
                        <p className="linkedintext_contactus">Linkedin</p>
                        <p className="linkedinlink_contactus">
                        <a
                            href="https://www.linkedin.com/company/krg-consultants/mycompany/"
                            >KRG Consultants</a>
                        </p>
                    </div>
                </div>
                <div className="location_contactus">
                <img className="image-2-Sy2_contactus" src={Image2} />
                <div className="locationsubdiv_contactus">
                        <p className="locationtext_contactus">Office Address</p>
                        <p className="locationaddress_contactus">
                        Haware Infotech Park, Sector 30A, Vashi New Mumbai - 400 703
                        </p>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Contactinfo_contactus
