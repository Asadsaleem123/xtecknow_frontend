import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

     
    const web_pic = "images/" + this.props.data.image;
    const app_pic = "images/mobile_dev.gif";
    const seo_pic = "images/seo_dev.gif";
    const bio = this.props.data.bio; 

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
              <h2>Our Business Activities and Professional Services</h2> 
              <p> We are proud to be a part of many customized projects and deployed technologies as per Software development : </p>
              <div className="row">
                <div >
               
                  <h2 >
                    <li>SAAS Logistics System </li>
                    <li>E-Commerce </li>
                    <li>Customized Plugins (Wordpress-Opencart-Magento-Shopify)</li>
                    <li>CRM</li>
                    <li>HRM</li>
                    <li>Enterprise Systems</li>
                    <li>Project Management System</li>
                    <li>Email Marketing System</li> 
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

export default About;
