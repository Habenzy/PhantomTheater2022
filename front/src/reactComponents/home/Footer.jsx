//---------------------------------------------Imports---------------------------------------------------
import "./Footer.css";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import { Link } from "react-router-dom";

//------------ Footer function returning Footer containing Social Media Links and Copyright Info ---------

function Footer() {
  return (
    <div className="footer">
      <div className="social_images">
        <a
          href="https://www.facebook.com/Phantom-Theater-1730271753886842/?ref=page_internal"
          target="blank"
        >
          <img className="social" src={Facebook} alt="" />
        </a>
        <a href="https://www.instagram.com/phantomtheater/" target="blank">
          <img className="social" id="insta" src={Instagram} alt="" />
        </a>
      </div>
      <div className="footerLinks">
        <Link to="/ProposalForm">Submit a Show Proposal</Link>
      </div>

      <div>
        <p>Copyright Phantom Theater 2020</p>
      </div>
      <Link to="/adminDash">Admin Login</Link>
    </div>
  );
}

//------export the component---------
export default Footer;
