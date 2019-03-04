import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default class portfolioArr extends Component {
	
	render() { let resumeData = this.props.resumeData;
    return (
      <section> 
          <Slider>
            {this.props.resumeData.portfolioArr.map((works, index) => 
              <div style={{textAlign:"center"}} key={index}>
                <h2 style={{color:"white"}}>{works.name}</h2>
                <div>{works.description}</div>
                <img src={works.imgurl} className="center" height="500" width="600"/>
                <a href={works.url} target="_blank">{works.summary}</a>
              </div>)}
          </Slider>
      </section> 
    );
	}
}
 
