import React, { Component } from 'react';


export default class Testimonials extends Component {
  
	render() {
    let resumeData = this.props.resumeData;
    
	return (
  <section>
  <div className="s-testimonials">

          <div className="overlay"/>
          <div className="row testimonials-header">
              <div className="col-full">
                  <h1 className="h02">Certifications and Skills</h1>
              </div>
          </div>
          <div className="row blog-content testimonial-content">
              <div className="col-full">
                <div className="blog-list block-1-2 block-tab-full">
                  <article className="col-block">
                    <h2 className="h01"><a href="blog-single.html">Pharmacy and Healthcare:</a></h2>
                    <p>
                    Pharmacist License (Florida): PS54720
                    <div className="blog-date">
                      <a href="blog-single.html">Sept, 2019</a>
                    </div>
                    </p>
                    <p>
                    Immunization Certificate Number: 20-482184 
                    </p>
                    <p>
                    CPR+, CarePoint, Kronos, Cerner, Pyxis, Pyxis ES, Omnicell, Epic
                    </p>
                    <p>
                    Institutional Review Board and HIPPA certified, CPR / First aid (certified lifeguard), Cholesterol, Blood Glucose, Blood Pressure, Bone Density, Body Fat Percentage Screening, Blood Borne Pathogens Certified
                    </p>
                    <p>
                    Mandarin (fluent), Spanish (fluent)
                    </p>
                  </article>
                  <article className="col-block">
                    <h2 className="h01"><a href="blog-single.html">Engineering and Information Technology.</a></h2>
                    <p>
                    Engineer in Training License: EIT024116
                    <div className="blog-date">
                      <a href="blog-single.html">Doesn't Expire</a>
                    </div>  
                    </p>
                    <p>
                    X-ray Imaging, Harvard Syringe Pump, Affinity Chromatography, Immunoblotting, SDS-PAGE, PCR, Confocal Microscopy, UV/Vis Spectroscopy, Fume Hood and Lab Safety Certified
                    </p>
                    <p>
                    Matlab, Solid Edge, Simulink, Labview, BUGS, MINITAB, BIOPAC, Chem Office, HTML, Ibrow, Image J software, Microsoft Access, Project, Outlook
                    </p>
                  </article>
                </div>
              </div>
            </div> 
  </div>
  </section>
   
   );
  }
}