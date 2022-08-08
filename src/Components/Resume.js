import React, { Component } from "react";
import Slide from "react-reveal";
import {withTranslation} from "react-i18next";
import i18next, { t } from "i18next";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    
 
    const skills = this.props.data.skills.map((skills) => {
     
    
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;
      const {t}=this.props;

      return (
        <li key={(skills.name)}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>{t('mission')}</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <h3 className="twelve columns">{t('mission_1')}</h3>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>{t('vision')}</span>
              </h1>
            </div>

            <h3 className="nine columns main-col">{t('vision_1')}</h3>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>{t('client_satisfaction')}</span>
              </h1>
            </div>

            <div className="nine columns main-col">
             

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default withTranslation() (Resume);
