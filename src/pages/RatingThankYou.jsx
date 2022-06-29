import React, {useContext} from "react";
import {RatingContext} from "../pages/RatingApp";
import "./../style.css";
import ThankYouImage from "./../images/illustration-thank-you.svg";
import SubmitButton from "../components/SubmitButton";




function RatingThankYou() {
  const userRating = useContext(RatingContext);

  const revealUserSelection = () => {
    console.log("Rating Result", userRating);
  };

  return (
    <>
      <div className="appContainer">
        <div className="imageContainer">
          <img src={ThankYouImage} className="thankYouImage" alt="Phone image" />
        </div>
        <div className="confirmationContainer">
          <p className="confirmationText">You selected {userRating} out of 5</p>
        </div>
        <h1 className="thanksHeading">Thank You!</h1>
        <p className="thanksText">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        <SubmitButton ratingSubmit={revealUserSelection} />
      </div>
    </>
  );
}

export default RatingThankYou;
