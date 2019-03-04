import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class Header extends Component {
  
	render() {
    let resumeData = this.props.resumeData;
    
	return (
      
		<> 
			<header> 
			<div className="s-header">
					<Particles  width={800} height={150}  />
					<nav className="header-nav-wrap">
						<ul className="header-nav">
							<li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
							<li><a className="smoothscroll" href="#about" title="about">About</a></li>
							<li><a className="smoothscroll" href="#works" title="works">Works</a></li>
							<li><a className="smoothscroll" href="#blog" title="blog">Publications</a></li>
							<li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
						</ul>
					</nav>

					<a className="header-menu-toggle" href="#0"><span>Menu</span></a>
				</div>
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
}
