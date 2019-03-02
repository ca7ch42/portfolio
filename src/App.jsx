import React, { Component } from 'react';

import Header from './Components/header/header';

import About from './Components/about/about';

import Works from './Components/works/works';

import Photoswipe from './Components/photoswipe/photoswipe';

import Testimonials from  './Components/testimonials/testimonials';

import Blog from './Components/blog/blog';

import ContactUs from './Components/contactus/contactus';

import Footer from './Components/footer/footer';

import resumeData from './resumeData';

	class App extends Component {
  render() {
    
		return (
      
			<div className="App">
        
				<Header resumeData={resumeData}/>
        
				<About resumeData={resumeData}/>

				<Works resumeData={resumeData}/>

				<Photoswipe resumeData={resumeData}/>
    
				<Testimonials resumeData={resumeData}/>
        
				<Blog resumeData={resumeData}/>
        
				<ContactUs resumeData={resumeData}/>

				<Footer resumeData={resumeData}/>
      
			</div>
    );
  
}
}

export default App;
