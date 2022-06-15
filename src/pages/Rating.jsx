import React from "react";
import styled from "@emotion/styled";
import "./../style.css"
import StarIcon from "./../images/icon-star.svg"


function rating() {
  return (
    <>
      <div className="appView">
        <div className="ratingsContainer">
          <div className="starContainer"><img src={StarIcon} className="starIcon" /></div>
          <h1 className="ratingHeading">How did we do?</h1>
          <p className="ratingText">
            Please let us know how we did with your support request. All feedback
            is appreciated to help us improve our offering!
          </p>
          <div className="numberBar">
            <p className="numberSelector">1</p>
            <p className="numberSelector">2</p>
            <p className="numberSelector">3</p>
            <p className="numberSelector">4</p>
            <p className="numberSelector">5</p>
          </div>
         <div className="btnContainer"> <button className="submitBtn">SUBMIT</button></div>
        </div>
      </div>
    </>
  );
}

export default rating;
