import React from "react";
import './Banner_applicationpage.css'
import Inviteimg from './assets/image 4.png'


function Banner_applicationpage(){

    return(
        <>
            <div className="banner_applicationpage">
                <div class="invitebanner_applicationpage">
                    <div class="bannerboundry_applicationpage">
                        <div class="inviteimg_applicationpage">
                            <div className="inviteimage2_applicationpage">

                            <img src={Inviteimg} alt="image%204" height="85%" />
                            </div>
                            </div>
                        <div class="invitecontent_applicationpage">
                            <div class="invitedialogue_applicationpage">
                            <h2>Help your Friend Grow</h2>
                            <p>Invite your friends to join KRG recrutement and help then grow there career<br/>
                            Get free prrimium for 48 Hours</p>
                            </div>
                            <div class="invitebuttons_applicationpage">
                            <button>Share</button> <button className="invitelink_applicationpage">Copy Link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner_applicationpage