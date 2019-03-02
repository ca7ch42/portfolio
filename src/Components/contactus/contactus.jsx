import React, { Component } from 'react'; 
export default class ContactUs extends Component{ 
	render() {let resumeData = this.props.resumeData; 
    return (
      <React.Fragment>

<section> 
 <div id="contact"> 
  <div className="s-contact target-section">
    <div className="overlay"/>
        <div className="row narrow section-intro">
          <div className="col-full">
            <h3>Contact</h3>
            <h1>Say Hello.</h1>
            <p className="lead">{resumeData.ContactUs}</p>
          </div>
        </div>

    <div className="row contact__main">
      <div className="col-eight tab-full contact__form">
        <form name="contactForm" id="contactForm" method="post" action="">
          <fieldset>
            <div className="form-field">
              <input name="contactName" type="text" id="contactName" placeholder="Name" defaultValue="" minLength={2} required aria-required="true" className="full-width" />
            </div>
            <div className="form-field">
              <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" defaultValue="" required aria-required="true" className="full-width" />
            </div>
            <div className="form-field">
              <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" defaultValue="" className="full-width" />
            </div>
            <div className="form-field">
              <textarea name="contactMessage" id="contactMessage" placeholder="message" rows={10} cols={50} required aria-required="true" className="full-width" defaultValue={""} />
            </div>
            <div className="form-field">
              <button className="full-width btn--primary">Submit</button>
            <div className="submit-loader">
                <div className="text-loader">Sending...</div>
                <div className="s-loader">
                  <div className="bounce1" />
                  <div className="bounce2" />
                  <div className="bounce3" />
                </div>
              </div>
            </div>
          </fieldset>
        </form>

        <div className="message-warning">
          Something went wrong. Please try again.
        </div> 

        <div className="message-success">
          Your message was sent, thank you!<br />
        </div>
        
        
      </div>
              <div className="col-four tab-full contact__infos">
                        <h4 class="h06">Email</h4>
                        <span>{resumeData.email}</span>
                
                        <h4 class="h06">Address</h4>
                        <span> {resumeData.address}</span>
                        
                        <h4 className="h06">Website</h4>
                        <span> {resumeData.website}</span>
              </div>

    </div>  
    </div>
</div>

</section>
</React.Fragment>
  );
  }
};
