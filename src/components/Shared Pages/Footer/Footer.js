import React from 'react';
import "./Footer.css";
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsLinkedin, BsMedium, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className='footer-details'>
          <div className="social-icon">
            <h2>Stay Connected</h2>
            <Link to="#" ><BsFacebook></BsFacebook></Link>
            <Link to="#" ><BsTwitter></BsTwitter></Link>
            <Link to="#" ><BsInstagram></BsInstagram></Link>
            <Link to="#" ><BsWhatsapp></BsWhatsapp></Link>
          </div>
          <div className='footer-middle'>
            <h2>Resources</h2>
            <Link to="#" >Making payments</Link>
            <Link to="#" >Delivery options</Link>
            <Link to="#" >Buyer Protection</Link>
            <Link to="#" ></Link>
          </div>
          <div className='footer-end'>
            <h2>Customer Service</h2>
            <Link to="#" >Transaction Services Agreement</Link>
            <Link to="#" >Take our feedback survey</Link>
          </div>
        </div>

        <h1 className="copyright">
          Copyright@ Grocery Manager. All Rights Reserved. 2022
        </h1>
      </section>
    </div>
  );
};

export default Footer;