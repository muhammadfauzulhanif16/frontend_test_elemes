import "./style.scss";
import React from "react";
import propTypes from "prop-types";

export const Star = ({ starClass, starHeight, starValue, starWidth }) => {
  const star = [],
    starPlaceholder = [];

  for (let i = 0; i < 5; i++) {
    starPlaceholder.push(
      <span
        className="placeholder star"
        key={i}
        style={{
          height: starHeight,
          left: i * starWidth,
          width: starWidth,
        }}
      />
    );
  }

  for (let i = 0; i < 5 && i < starValue; i++) {
    star.push(
      <span
        className="star"
        key={i}
        style={{
          height: starHeight,
          left: i * starWidth,
          width: starWidth,
        }}
      />
    );
  }

  return (
    <div className={`stars ${starClass}`} style={{ height: starHeight }}>
      {star}
      {starPlaceholder}
    </div>
  );
};

Star.propType = {
  starClass: propTypes.string,
  starHeight: propTypes.number,
  starSpacing: propTypes.number,
  starValue: propTypes.number,
  starWidth: propTypes.number,
};
