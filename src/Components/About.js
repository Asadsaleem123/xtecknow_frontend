import React, { Component } from "react";
import Fade from "react-reveal";
import i18next from "i18next";
import { withTranslation, WithTranslation } from "react-i18next";

class About extends Component {
  render() {
    if (!this.props.data) return null;

     
    const web_pic = "images/" + this.props.data.image;
    const app_pic = "images/mobile_dev.gif";
    const seo_pic = "images/seo_dev.gif";
    const bio = this.props.data.bio; 
    const {t}=this.props;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={web_pic}
                alt=""
              />
              <img
                className="profile-pic"
                src={app_pic}
                alt=""
              />
              <img
                className="profile-pic"
                src={seo_pic}
                alt=""
              />
            </div>
            <div className="nine columns main-col">
              <h2>{t('our_buisness')}</h2> 
              <p> {t('we_proud')}</p>
              <div className="row">
                <div >
               
                  <h2 >
                    <li>{t('our_sys_1')}</li>
                    <li>{t('our_sys_2')}</li>
                    <li>{t('our_sys_3')}</li>
                    <li>{t('our_sys_4')}</li>
                    <li>{t('our_sys_5')}/</li>
                    <li>{t('our_sys_6')}</li>
                    <li>{t('our_sys_7')}</li>
                    <li>{t('our_sys_8')}</li> 
                  </h2>
                </div> 
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default withTranslation() (About);
