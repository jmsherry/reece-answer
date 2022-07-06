import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../style.css";
import StarIcon from "./../images/icon-star.svg";
import NumberSelector from "../components/NumberSelector";
import SubmitButton from "../components/SubmitButton";
import { RatingContext } from "../contexts/rating.context";

// RATING APP

function RatingApp() {
  const [tempRating, setTempRating] = useState(1);
  console.log("🚀 ~ file: RatingApp.jsx ~ line 12 ~ RatingApp ~ tempRating", tempRating)

  const navigate = useNavigate();
  
  const { setRating } = useContext(RatingContext);

  const ratingHandler = (n) => setTempRating(n);

  const handleSubmit = () => {
    setRating(tempRating);
    navigate('/ThankYou');
  }

  return (
    <div className="appContainer">
      <div className="starContainer">
        <img src={StarIcon} className="starIcon" alt="Star Icon " />
      </div>
      <h1 className="ratingHeading">How did we do?</h1>
      <p className="ratingText">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="numberBar">
        <NumberSelector handler={ratingHandler} number={1} />
        <NumberSelector handler={ratingHandler} number={2} />
        <NumberSelector handler={ratingHandler} number={3} />
        <NumberSelector handler={ratingHandler} number={4} />
        <NumberSelector handler={ratingHandler} number={5} />
      </div>
      {/* Create an if statement for the submit button that validates a selection and then moves its forward if a number has been selected */}
      <SubmitButton ratingSubmit={handleSubmit} />
    </div>
  );
}

export default RatingApp;
