import React from "react";
import Logo from "../../assets/images/curriki_new_logo.png";
const Index = () => {
  return (
      <>
    <div className="footer-area">
      <div className="container">
        <div className="footer-content-area">
          <img src={Logo} alt="curriki logo" />
          <div className="footer-links">
            <a href="curriki.org" target="_blank">
              About
            </a>
            <a href="curriki.org" target="_blank">
              BLog
            </a>
            <a href="curriki.org" target="_blank">
              Webinars
            </a>
          </div>
          <div className="footer-links">
            <a href="curriki.org" target="_blank">
              Press
            </a>
            <a href="curriki.org" target="_blank">
              Providers
            </a>
            <a href="curriki.org" target="_blank">
              Donate
            </a>
          </div>
          <div className="footer-links">
            <a href="curriki.org" target="_blank">
              Contact
            </a>
            <a href="curriki.org" target="_blank">
              Privacy Policy
            </a>
            <a href="curriki.org" target="_blank">
              Terms of service
            </a>
          </div>
        </div>
      </div>
     
    </div>
     <div className="bottom-footer">
     <p><span><a href="curriki.org">curriki.org</a></span> 2004-2021 Curriki a 501.c.3 Nonprofit</p>

 </div>
 </>
  );
};

export default Index;
