import React from 'react'

import './contactformdiv_contactus.css'

function Contactformdiv_contactus() {

  return (
    <>
<div className="contactformdiv_contactus">
            <div className="contact_contactus">
                <div id="container_contactus">
                <h2>contact</h2>
                <form action="#" method="post" id="contact_form_contactus">
                    <div className="name_contactus">
                    <label for="name"></label>
                    <input type="text" placeholder="name" name="name" id="name_input_contactus" required />
                    </div>
                    <div className="email_contactus">
                    <label for="email"></label>
                    <input type="email" placeholder="e-mail" name="email" id="email_input_contactus" required />
                    </div>
                    <div className="subject_contactus">
                    <label for="subject"></label>
                    <select placeholder="subject line" name="subject" id="subject_input_contactus" required>
                        <option disabled hidden selected>subject</option>
                        <option>Quick question.</option>
                        <option>Service</option>
                        <option>Complaint</option>
                        <option>Other</option>
                    </select>
                    </div>
                    <div className="message_contactus">
                    <label for="message"></label>
                    <textarea name="message" placeholder="message" id="message_input_contactus" cols="30" rows="5" required></textarea>
                    </div>
                    <div className="submit_contactus">
                    <input type="submit" value="submit" id="form_button_contactus" />
                    </div>
                </form>
                </div>
                </div>
        </div>
    </>
  )
}

export default Contactformdiv_contactus;