import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import tiktok from "../images/tiktok.png";
import youtube from "../images/youtube.png";
import separator from "../images/separator.png";
import instagram from "../images/instagram.png";
const SocialMedia = () => {
  return (
    <div>
      <section class="Home_socials-container">
        <div class="Home_social-buttons">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/profile.php?id=100086249187059"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://twitter.com/SooraTheApp"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a target="_blank" rel="noopener" href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <a target="_blank" rel="noopener" href="/">
            <img src={tiktok} alt="tiktok" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.youtube.com/channel/UCS2_jKjdg5KTLo-1zFXDO8A"
          >
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <div class="Home_separator-container">
          <img src={separator} alt="separator" />
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
