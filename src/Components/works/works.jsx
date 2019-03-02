import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


export default class portfolioArr extends Component {
	
	render() { let resumeData = this.props.resumeData;
    	return (
<section> 
  <Slider>
    {this.props.resumeData.portfolioArr.map((works, index) => 
      <div key={index}>
        <h2>{portfolioArr.name}</h2>
        <div>{portfolioArr.description}</div>
      </div>)}
  </Slider>

 {/*<div id="works">
  <div className="s-works target-section">
      <div className="row narrow section-intro has-bottom-sep">
        <div className="col-full">
          <h3>Portfolio</h3>
          <h1>See My Latest Projects.</h1>
        </div>
      </div>

      
      <div className="row masonry-wrap"> 
        {resumeData.portfolio && resumeData.portfolio.map((item)=>{
                          return(
        <div className="masonry">
          <div className="masonry__brick">
            <div className="item-folio">
                  
              <div className="item-folio__thumb">
                  <a href={`${item.imghref}`} className="thumb-link" title="The Beetle Car" data-size="1050x700">
                    <img src={`${item.imgurl}`} srcSet= "{item.imgurl} 1x, {item.imgurl}@2x.jpg 2x" alt="" />
                    <span className="shadow-overlay" />
                  </a>
                

                  <div className="item-folio__text">
                    <h3 className="item-folio__title">
                      {item.name}
                    </h3>
                    <p className="item-folio__cat">
                      {item.category}
                    </p>
                  </div>
              
                  <a href={`${item.imghref}`} className="item-folio__project-link" title="Project link">
                    <i className="im im-link" />
                  </a>

                  <div className="item-folio__caption">
                    <p>{item.description}</p>
                  </div>
                </div> 
              </div> 
            </div> 
          </div>
            );})
          }
        </div>
      </div>
        </div>*/}
</section> 
    );
	}
}