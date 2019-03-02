import React, { Component } from 'react';


export default class Testimonials extends Component {
  
	render() {
    let resumeData = this.props.resumeData;
    
	return (
      <React.Fragment>



<section>
<div className="s-testimonials">

        <div className="overlay"/>

        <div className="row testimonials-header">
            <div className="col-full">
                <h1 className="h02">What People Say.</h1>
            </div>
        </div>

        <div className="row testimonials">

            <div className="col-full testimonials__slider slick-initialized slick-slider">
              <div className="slick-prev slick-arrow" style="">
                <i className="im im-arrow-left" aria-hidden="true"/>
              </div>

    {/*}    var arr = [];            
        var certList = {this.props.resumeData.testimonials.map((certList, index) => {
            return (
              <div className="testimonials__slide slick-slide slick-cloned" tabindex="-1" role="option" aria-describedby="slick-slide01" style="width: 462px;" data-slick-index="-2" aria-hidden="true">
                <li key={certList + index}>
                    <img src="images/avatars/user-05.jpg" alt="Author image" className="testimonials__avatar"/>
                            <p>{item.description}</p>
                            <div className="testimonials__author h06">
                                 {item.name}
                                <span>{item.expiration}</span>
                             </div>
                </li>
              </div>  
            );
        })}            

            arr.push(
                <div key="certList" className="row about-content about-content--timeline">     
                    <div aria-live="polite" className="slick-list draggable">
                      <div class="slick-track" style="opacity: 1; width: 3234px; transform: translate3d(-1848px, 0px, 0px);" role="listbox">
                              <ul className="certifications">
                              {certList}
                              </ul>
                      </div>
                    </div>
                  </div>
            );
            */}
            <div className="slick-next slick-arrow" style="">
                <i className="im im-arrow-right" aria-hidden="true"/>
            </div>
        </div>

        </div> 
      </div>
    
</section>
   

</React.Fragment> 
   );
  }
}