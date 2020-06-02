import React from "react";
import fblogo from "../img/fbicon.svg";
import youtubelogo from "../img/youtubeicon.svg";
import * as Routes from "../constants/routes";

function Footer() {
  return (
    <footer className="footer">
      <div className="icon-container">
        <img className="footer-icon" src={fblogo} alt="facebook logo" />
        <img className="footer-icon" src={youtubelogo} alt="youtube logo" />
      </div>
      <div className="container-sm">
        <a href={Routes.HOME} className="footer-link">
          {" "}
          Home |
        </a>
        <a href={Routes.TUTORIALS} className="footer-link">
          {" "}
          Tutorials |
        </a>
        <a href={Routes.RESOURCES} className="footer-link">
          {" "}
          Resources |
        </a>
        <a href={Routes.COACHING} className="footer-link">
          {" "}
          Coaching
        </a>
      </div>
      <div className="container-sm">
        <span className="footer-txt">Keller Williams Tampa Central</span>
      </div>
      <div className="container-sm">
        <span className="footer-txt">
          1208 E Kennedy Blvd 231 Tampa, FL 33602 | (813) 516-0468{" "}
        </span>
        <br />
        <span className="footer-txt">Lic: CQ1028427</span>
      </div>
    </footer>
  );
}

export default Footer;
