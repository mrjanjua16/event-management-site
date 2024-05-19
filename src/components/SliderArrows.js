import React from "react";

const PrevArrow = ({ onClick }) => {
  return (
    <button className="slick-prev slick-arrow" aria-label="Previous" type="button" onClick={onClick}>
      Previous
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button className="slick-next slick-arrow" aria-label="Next" type="button" onClick={onClick}>
      Next
    </button>
  );
};

export { PrevArrow, NextArrow };