import React, { Component } from 'react';

export default class Blog extends Component {
  
render() {
    //let resumeData = this.props.resumeData;
   
return (
  <React.Fragment>
<section> 
 <div id="blog"> 
  <div className="s-blog target-section">
  <div className="row narrow section-intro has-bottom-sep">
    <div className="col-full">
      <h3>Journal</h3>
      <h1>Publications</h1>
      <p className="lead">Please review samples of my pharmacy and biomedical engineering work.</p>
    </div>
  </div>
  <div className="row blog-content">
    <div className="col-full">
      <div className="blog-list block-1-2 block-tab-full">
        <article className="col-block">
          <div className="blog-date">
            <a href="blog-single.html">September 2015</a>
          </div>  
          <h2 className="h01"><a href="blog-single.html">PharmaNote Research Study: Fluticasone Furoate</a></h2>
          <p>
          A Novel Once Daily Inhaled Corticosteroid for the Treatment of Asthma
          </p>
          <div className="blog-cat">
            <a href="http://copnt13.cop.ufl.edu/doty/pep/pharmanote/September2015.pdf">PharmaNote</a>
          </div>
        </article>
        <article className="col-block">
          <div className="blog-date">
            <a href="blog-single.html">Sept 15, 2017</a>
          </div>  
          <h2 className="h01"><a href="blog-single.html">Awarded The President’s Undergraduate Research Award for research proposal, “Engineering Recombinant Protein for Quantum Dot Tagging Systems."</a></h2>
          <p>
          Graduate Student Mentor: Allison Denise, Principal Investigator: Dr. Gang Bao. Conducted Several Biomolecular Assays and aided in the publication of the following paper:
          "Resonance Energy Transfer Between Luminescent Quantum Dots and Diverse Fluorescent Protein Acceptors"
          </p>
          <div className="blog-cat">
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2777665/pdf/nihms-150911.pdf">NIH</a>
          </div>
        </article>
        <article className="col-block">
          <div className="blog-date">
            <a href="blog-single.html">Sept 14, 2017</a>
          </div>
          <h2 className="h01"><a href="blog-single.html">Workspace Design Trends and Ideas.</a></h2>
          <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh dolore irure esse Duis nulla sint.
          </p>
          <div className="blog-cat">
            <a href="blog.html">Branding</a><a href="blog.html">Wordpress</a>
          </div>
        </article>
        <article className="col-block">
          <div className="blog-date">
            <a href="blog-single.html">Sept 12, 2017</a>
          </div>    
          <h2 className="h01"><a href="blog-single.html">Using Patterns in your Branding.</a></h2>
          <p>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
          </p>
          <div className="blog-cat">
            <a href="blog.html">Design</a><a href="blog.html">Branding</a>
          </div>
        </article>
      </div> {/* end blog-list */}
    </div> {/* end col-full */}
  </div> {/* end blog-content */}
 </div>
</div>
</section> {/* end s-blog */}
</React.Fragment>
    );
  }
}
