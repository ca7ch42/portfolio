import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default class portfolioArr extends Component {
	
	render() {
    return (
      <section> 
          <Slider>
            {this.props.resumeData.portfolioArr.map((works, index) => 
              <div id="works" style={{textAlign:"center"}} key={index}>
                <h2 style={{color:"white"}}>{works.name}</h2>
                <div style={{color:"#f62626"}}>{works.description}</div>
                <img src={works.imgurl} className="center" height="500" width="600" alt="works"/>
                <a href={works.url} target="_blank" rel="noopener noreferrer">{works.summary}</a>
              </div>)}
          </Slider>
      </section> 
    );
	}
}
 
