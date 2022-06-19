import React from 'react'

function SubmitButton({ ratingSubmit }) {
    return (
      <div>
        <button className="submitBtn" onClick={ratingSubmit}>
          Submit
        </button>
      </div>
    );
  }

export default SubmitButton