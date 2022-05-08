import React from 'react';
import "./Speciality.css"
import {
  FcMoneyTransfer,
  FcOnlineSupport,
  FcRefresh,
  FcShipped,
  FcPaid,
  FcCurrencyExchange,
  FcPortraitMode,
} from "react-icons/fc";

const Speciality = () => {
  return (
    <div>
      <section style={{ marginTop: 50 }} className="services">
        <div>
          <h1 className="heading">
            SHOP WITH US
          </h1>
        </div>

        <div className="box-container text-center">
          <div className="box border border-warning ">
            <i>
              <FcMoneyTransfer></FcMoneyTransfer>
            </i>
            <h3>Great value</h3>
            <p>We offer competitive prices on all of our items.</p>
          </div>
          <div className="box border border-warning">
            <i>

              <FcCurrencyExchange></FcCurrencyExchange>
            </i>
            <h3>Safe payment</h3>
            <p>Pay with the world’s most popular and secure payment methods.</p>
          </div>
          <div className="box border border-warning">
            <i>
              <FcPaid></FcPaid>
            </i>
            <h3>Shop with confidence</h3>
            <p>Our Buyer Protection policy covers your entire purchase journey.</p>
          </div>
          <div className="box border border-warning">
            <i>
              {" "}
              <FcOnlineSupport></FcOnlineSupport>
            </i>
            <h3>Help center</h3>
            <p>Round-the-clock assistance for a smooth shopping experience.</p>
          </div>
          <div className="box border border-warning">
            <i>
              <FcShipped></FcShipped>
            </i>
            <h3>Shop better</h3>
            <p>Download the app for mobile-only features such as image search and discount games.</p>
          </div>
          <div className="box border border-warning">
            <i>
              <FcCurrencyExchange></FcCurrencyExchange>
            </i>
            <h3>Easy payment</h3>
            <p> Enjoy 0% interest for installment payment.</p>
          </div>
          <div className="box border border-warning">
            <i>
              <FcPortraitMode></FcPortraitMode>
            </i>
            <h3>Membership policy</h3>
            <p>
              1 month free membership for all citizens.
            </p>
          </div>
          <div className="box border border-warning">
            <i>
              <FcRefresh></FcRefresh>
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