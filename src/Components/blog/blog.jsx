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
          <p className="bigSpace"/>
          A Novel Once Daily Inhaled Corticosteroid for the Treatment of Asthma
          <p className="bigSpace"/>
          <div className="blog-cat">
            <a href="http://copnt13.cop.ufl.edu/doty/pep/pharmanote/September2015.pdf">PharmaNote</a>
          </div>
        </article>
        <article className="col-block">
          <div className="blog-date">
            <a href="blog-single.html">May, 2006</a>
          </div>  
          <h2 className="h01"><a href="blog-single.html">President’s Undergraduate Research Award for Research Proposal:<p>“Engineering Recombinant Protein for Quantum Dot Tagging Systems."</p></a></h2>
          <p className="bigSpace"/> Principal Investigator: Dr. Gang Bao.
          <p className="bigSpace"/> Graduate Student Mentor: Allison Dennise
          <p className="bigSpace"/> Conducted Several Biomolecular Assays and Aided in the Research that Led to the Publication of:
          "Resonance Energy Transfer Between Luminescent Quantum Dots and Diverse Fluorescent Protein Acceptors"
          <p className="bigSpace"/>
          <div className="blog-cat">
          <p className="bigSpace"/>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2777665/pdf/nihms-150911.pdf">NIH</a>
          </div>
        </article>
      </div> 
    </div>
  </div>
 </div>
</div>
</section>
</React.Fragment>
    );
  }
}
