import React, { Component } from 'react'; 


export default class About extends Component {
  constructor(props){
    super(props);
    this.renderData = this.renderData.bind(this);
  }


  render() {
    return (
        <React.Fragment>
          <section> 
            <div id="about" className="s-about target-section">
              {this.renderData()}
            </div>
          </section>
        </React.Fragment>
    );
  }

  renderData(){
    if (!this.props.resumeData && !this.props.resumeData.about){
      return;
    }
      return this.getItems();
   }

 getItems(){
  var arr = [];

  var skillsList = this.props.resumeData.skillsArr.map((skillsItem, index) => {
    return (
        <li key={skillsItem + index}>
          <div className={`${skillsItem.progresspercent}`}>
              <span>{skillsItem.percent}</span>
              <strong>{skillsItem.skillname}</strong>
          </div> 
        </li>
    );
  });

  arr.push(
    <div key="aboutMe">
      <div className="row narrow section-intro has-bottom-sep">
              <div className="col-full text-center">
                <h3>About</h3>
                <h1>More About Me</h1>
              </div>
          </div>

          <div className="row about-content">
            <div className="col-six tab-full left">
              <h3>Hello!</h3>
              <p>{this.props.resumeData.aboutme}</p>
              <p>{this.props.resumeData.skillsDescription}</p>
       <ul>
          {this.props.resumeData.educationArr.map((educationItem, index) => {
              return (
                <li key={educationItem + index}>
                  <div>
                      <h3>{educationItem.UniversityName}</h3>
                      <h6>{educationItem.specialization}</h6>
                          {educationItem.timeframe}
                  </div>
                </li>
              );
            })}
        </ul>
            </div>  

          <div key="skillTable" className="col-six tab-full right">
              <h3>Web Development and Information Technology Skills.</h3>
              <ul className="skill-bars">
                {skillsList}
              </ul>
          </div>
            <div className="row about-content about-content--buttons">
            <div className="col-six tab-full left">
              <a target="_BLANK" rel="noopener noreferrer" href={`${this.props.resumeData.resumesource}`} className="btn btn--primary full-width">Download My CV</a>
            </div>
            <div className="col-six tab-full right">
              <a href="#contact" className="btn full-width">Hire Me Now</a>
            </div>
          </div>
         </div>
    </div> 
    );



    var workList = this.props.resumeData.workExpArr.map((item, index) => {
      return (
        <div key={"workExp" + index} className="timeline__block">
        <div className="timeline__bullet" />
          <div className="timeline__header">
              <p className="timeline__timeframe">{item.timeframe}</p>
              <h3>{item.employer}</h3>
              <h5>{item.specialization}</h5>
          </div>
          <div className="timeline__desc">
            <p>{item.duties}</p>
          </div>
        </div>
      );
    })

  arr.push(
        <div key="workList" className="row about-content about-content--timeline">
            <div className="col-full text-center">
              <h3>Work Experience.</h3>
            </div>
            <div className="col-six tab-full left">
              <div className="timeline">
                {workList.slice(0, workList.length/2)}
              </div>
            </div>
            <div className="col-six tab-full right">
              <div className="timeline">
              {workList.slice(workList.length/2)}
              </div>
            </div>
        </div>
     );

   return arr;
 }



}

