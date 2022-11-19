import React from "react";
import apple_store from "../images/apple-store.png";
import google_play from "../images/google-play.png";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <div className="container-fluid">
      <section className="Home_main-container row">
        <div className="col-lg-6 col-xl-6  col-12 Home_slogan-container text-lg-start text-center align-items-lg-start align-items-center">
          <h4>Coming Soon</h4>
          <div className="Home_slogan">
            <h1>Bringing</h1>
            <h1>Muslims Together</h1>
          </div>
          <div className="Home_app-store-buttons">
            <a target="_blank" rel="noopener" href="/">
              <img src={apple_store} alt="apple store" />
            </a>
            <a target="_blank" rel="noopener" href="/">
              <img src={google_play} alt="apple store" />
            </a>
          </div>
        </div>
        <div className=" col-lg-6 col-xl-6  col-12 Home_slogan-image-container"></div>
      </section>
      <SocialMedia />
      <section className="Home_notify-container row">
        <div className=" col-lg-6 col-xl-6  col-12 Home_app-image-container"></div>
        <div className=" col-lg-6 col-xl-6  col-12 Home_notify-form-container ">
          <div>
            <h4 className="text-lg-start text-center align-items-lg-start align-items-center">
              Coming Soon
            </h4>
            <div className="Home_call-to-action text-lg-start text-center align-items-lg-start align-items-center">
              <h1>Get Notified</h1>
              <h1>When We Launch</h1>
            </div>
            <div className="Home_notify-form ">
              <input type="text" className="notify_input" />
              <button>Notify Me</button>{" "}
            </div>
            <span className="Home_spam-message text-lg-start text-center align-items-lg-start align-items-center">
              *Don't worry, we won't spam you
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
