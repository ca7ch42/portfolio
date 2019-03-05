import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class Header extends Component {
  constructor(props){
		super(props);
		this.headerNavWrap = React.createRef();
		this.menuToggle = this.menuToggle.bind(this);
	}

	render() {
    let resumeData = this.props.resumeData;
    
	return (
      
		<> 
			<header> 
			<div className="s-header">
					<Particles  width={800} height={150}  
						params={{"particles":{"number":{"value":279,"density":{"enable":true,"value_area":1683.5826639087988}},"color":{"value":"#3d99df"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":4.872463273808071,"size_min":0.1,"sync":true}},"line_linked":{"enable":true,"distance":150,"color":"#3d99df","opacity":0.2966312312601217,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":170.53621458328246,"line_linked":{"opacity":0.6416478833846109}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
				}/>
					<nav className="header-nav-wrap" ref={this.headerNavWrap}>
							<ul className="header-nav">
							<li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
							<li><a className="smoothscroll" href="#about" title="about">About</a></li>
							<li><a className="smoothscroll" href="#works" title="works">Works</a></li>
							<li><a className="smoothscroll" href="#blog" title="blog">Publications</a></li>
							<li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
							</ul>
					</nav>
			</div>
							<a className="header-menu-toggle" onClick={this.menuToggle} href="#0" style={{zIndex:999}}><span>Menu</span></a>
			
				</header>

		<section>

		<div id="home">
		 <div className="s-home page-hero target-section" data-parallax="scroll" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
		   		

  		   <div className="overlay" />
  		    <div className="shadow-overlay" />
  		     <div className="home-content">
    			<div className="row home-content__main">
      			<h3>Hello,</h3>
      			<h1>
        		   I am {resumeData.name}. <br />
        		   I am a {resumeData.role}
      			</h1>
      			 <div className="home-content__buttons">
        		  <a href="#works" className="smoothscroll btn btn--stroke">
          		   Latest Projects
        		  </a>
        		 <a href="#about" className="smoothscroll btn btn--stroke">
          		   More About Me
        		 </a>
      			 </div>
      			  <div className="home-content__scroll">
        		   <a href="#about" className="scroll-link smoothscroll">
          			<span>Scroll Down</span>
        		   </a>
      			   </div>
    			</div>
  		    </div> 
   </div>
  </div>
</section>

</>
    );
	}

	menuToggle() {

		var displayProp = this.headerNavWrap.current.style.display;
		if (displayProp === "block"){
				this.headerNavWrap.current.style.display = "none";
		}
		else {
				this.headerNavWrap.current.style.display = "block";
		}
	}
}
