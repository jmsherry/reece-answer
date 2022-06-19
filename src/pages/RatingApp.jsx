import React, { useState } from "react";
import "./../style.css";
import StarIcon from "./../images/icon-star.svg";
import NumberSelector from "../components/NumberSelector";
import SubmitButton from "../components/SubmitButton";

// RATING APP

function RatingApp() {
  const [state, setState] = useState(1);

  const submitData = () => {
    let ratingResult;
    ratingResult = state;
    console.log("Rating Result", ratingResult);
  };
  return (
    <>
      <div className="appContainer">
        <div className="starContainer">
          <img src={StarIcon} className="starIcon" />
        </div>
        <h1 className="ratingHeading">How did we do?</h1>
        <p className="ratingText">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="numberBar">
          <NumberSelector handler={() => setState(1)} number={1} />
          <NumberSelector handler={() => setState(2)} number={2} />
          <NumberSelector handler={() => setState(3)} number={3} />
          <NumberSelector handler={() => setState(4)} number={4} />
          <NumberSelector handler={() => setState(5)} number={5} />
        </div>
        <SubmitButton ratingSubmit={submitData} />
      </div>
    </>
  );
}

export default RatingApp;
