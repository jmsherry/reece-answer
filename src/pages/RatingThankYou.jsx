import React, { useContext } from "react";
import "./../style.css";
import ThankYouImage from "./../images/illustration-thank-you.svg";
import SubmitButton from "../components/SubmitButton";
import { RatingContext } from "../contexts/rating.context";

function RatingThankYou() {
  const { rating } = useContext(RatingContext);

  const revealUserSelection = () => {
    console.log("Rating Result", rating);
  };

  return (
    <div className="appContainer">
      <div className="imageContainer">
        <img src={ThankYouImage} className="thankYouImage" alt="Phone" />
      </div>
      <div className="confirmationContainer">
        <p className="confirmationText">You selected {rating} out of 5</p>
      </div>
      <h1 className="thanksHeading">Thank You!</h1>
      <p className="thanksText">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
      <SubmitButton ratingSubmit={revealUserSelection} />
    </div>
  );
}

export default RatingThankYou;
