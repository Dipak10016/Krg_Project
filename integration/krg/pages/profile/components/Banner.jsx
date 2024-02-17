import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div>
        <div className="profile_invitebanner">
  {/* Your invite banner content */}
  <div className="profile_bannerboundry">
    <div className="profile_inviteimg">
      <img src="banner1.jpg" alt="image%204" height="90%" />
    </div>
    <div className="profile_invitecontent">
      <div className="profile_invitedialogue">
        <h2>Help your Friend Grow</h2>
        <p>
         <br /> Invite your friends to join KRG recruitment and help them grow their career<br />
          Get free premium for 48 Hours
        </p>
        <div className="profile_invitebuttons">
          <button>Share</button>
          <button>Copy Link</button>
        </div>
      </div>
    </div>
  </div>
</div>

        

  

    </div>
  )
}

export default Banner