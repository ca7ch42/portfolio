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
              <a className="footer-site-logo" href="#top"><img src="/images/logo.png" alt="Homepage" /></a>
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
      </footer>
      </React.Fragment>
          );
        }
}
