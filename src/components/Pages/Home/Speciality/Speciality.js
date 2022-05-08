import React from 'react';
import "./Speciality.css"
import {
  FcEngineering,
  FcOnlineSupport,
  FcProcess,
  FcInTransit,
  FcBrokenLink,
  FcCurrencyExchange,
  FcBiotech,
  FcBinoculars,
} from "react-icons/fc";

const Speciality = () => {
  return (
    <div>
      <section style={{ marginTop: 50 }} className="services" id="services">
        <div>
          <h1 className="heading">
            SHOP WITH US
          </h1>
        </div>

        <div className="box-container text-center">
          <div className="box">
            <i>
              <FcEngineering></FcEngineering>
            </i>
            <h3>Great value</h3>
            <p>We offer competitive prices on all of our items.</p>
          </div>
          <div className="box">
            <i>
              <FcOnlineSupport></FcOnlineSupport>
            </i>
            <h3>Safe payment</h3>
            <p>Pay with the world’s most popular and secure payment methods.</p>
          </div>
          <div className="box">
            <i>
              <FcBrokenLink></FcBrokenLink>
            </i>
            <h3>Shop with confidence</h3>
            <p>Our Buyer Protection policy covers your entire purchase journey.</p>
          </div>
          <div className="box">
            <i>
              {" "}
              <FcProcess></FcProcess>
            </i>
            <h3>Help center</h3>
            <p>Round-the-clock assistance for a smooth shopping experience.</p>
          </div>
          <div className="box">
            <i>
              <FcInTransit></FcInTransit>
            </i>
            <h3>Shop better</h3>
            <p>Download the app for mobile-only features such as image search and discount games.</p>
          </div>
          <div className="box">
            <i>
              <FcCurrencyExchange></FcCurrencyExchange>
            </i>
            <h3>Easy payment</h3>
            <p> Enjoy 0% interest for installment payment. * Conditions Apply</p>
          </div>
          <div className="box">
            <i>
              <FcBiotech></FcBiotech>
            </i>
            <h3>Membership policy</h3>
            <p>
              1 month free membership for all citizens (unless otherwise stated). *
              Conditions Apply
            </p>
          </div>
          <div className="box">
            <i>
              <FcBinoculars></FcBinoculars>
            </i>
            <h3>Refund policy</h3>
            <p>
              We will provide free 1 week service if you find our products worse!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speciality;