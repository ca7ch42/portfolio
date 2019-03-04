import React, { Component } from 'react';


export default class Footer extends Component {

  render() {
      let resumeData = this.props.resumeData;
    
      return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="col-full">
            <div className="footer-logo">
              <a className="footer-site-logo" href="#0"><img src="/images/logo.png" alt="Homepage" /></a>
            </div>
            <ul className="footer-social">
              {resumeData.socialLinks && resumeData.socialLinks.map((item) =>{
                                        return(
                <li key={item.name}> 
                                <a href={`${item.url}`} target="_blank">
                <i className={item.className}></i></a>
                </li>
                );})
              }
            </ul>
          </div>
        </div>
      
            <div className="go-top" style={{display: 'block'}} >
              <a className="smoothscroll" title="Back to Top" href="#top">
                <i className="im im-arrow-up" aria-hidden="true" />
              </a>  
            </div> 
      </footer>
      </React.Fragment>
          );
        }
}
