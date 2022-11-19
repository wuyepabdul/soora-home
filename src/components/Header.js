import React, { useState } from "react";
import logo from "../images/logo.png";
import contact_icon from "../images/contact-icon.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Header = () => {
  const [copyState, setCopyState] = useState({
    value: "",
    copied: false,
  });

  return (
    <nav class="Navbar_nav">
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exzampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content px-5 py-5">
            <div className="modal-header border-none ">
              <h6>Reach out to us through</h6>
            </div>
            <div className="modal-body border-none ">
              <p className="Home_email">sooratheapp@gmail.com</p>{" "}
              <i class="fa-sharp fa-solid fa-copy"></i>
              <i class="fa-duotone fa-copy"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="Navbar_logo">
        <img src={logo} alt="soora logo" />
      </div>
      <div class="Navbar_right-nav">
        <button href="/" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <p>Contact us</p>
          <img src={contact_icon} alt="contact us" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
