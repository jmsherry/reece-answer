import React from "react";
import "./../style.css";
import ThankYouImage from "./../images/illustration-thank-you.svg";


function RatingThankYou() {
  return (
    <>
      <div className="appContainer">
        <div className="imageContainer">
          <img src={ThankYouImage} className="thankYouImage" alt="Phone image" />
        </div>
        <div className="confirmationContainer">
          <p className="confirmationText">You selected {} out of 5</p>
        </div>
        <h1 className="thanksHeading">Thank You!</h1>
        <p className="thanksText">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </>
  );
}

export default RatingThankYou;
