import React, { useState, createContext } from "react";
import "./../style.css";
import StarIcon from "./../images/icon-star.svg";
import NumberSelector from "../components/NumberSelector";
import SubmitButton from "../components/SubmitButton";

// CONTEXT

export const RatingContext = createContext();

// RATING APP

function RatingApp({ ratingResult }) {
  const [state, setState] = useState(1);

  const submitData = () => {
    let ratingResult;
    ratingResult = state;
    console.log("Rating Result", ratingResult);
  };

  return (
    <>
      <div className="appContainer">
        <RatingContext.Provider value={ratingResult}>
          <div className="starContainer">
            <img src={StarIcon} className="starIcon" alt="Star Icon " />
          </div>
          <h1 className="ratingHeading">How did we do?</h1>
          <p className="ratingText">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="numberBar">
            <NumberSelector handler={() => setState(1)} number={1} />
            <NumberSelector handler={() => setState(2)} number={2} />
            <NumberSelector handler={() => setState(3)} number={3} />
            <NumberSelector handler={() => setState(4)} number={4} />
            <NumberSelector handler={() => setState(5)} number={5} />
          </div>
          {/* Create an if statement for the submit button that validates a selection and then moves its forward if a number has been selected */}
          <SubmitButton ratingSubmit={submitData} />
        </RatingContext.Provider>
      </div>
    </>
  );
}

export default RatingApp;
