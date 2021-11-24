import React from "react";
import { Star } from "./Star/";

export const Card = ({
  cardClass,
  title,
  info,
  foodImage,
  isCategory,
  isTrending,
  foodName,
  iconFood,
  amountFood,
  foodCategory,
  imageClass,
  foodCategoryClass,
  foodNameClass,
  starValue,
  isText,
  children,
}) => {
  return (
    <div className={cardClass}>
      {isText ? (
        <div className="mb-12">
          <p>{title}</p>
          <p className="text-lime-8bac3e">{info}</p>
        </div>
      ) : (
        ""
      )}

      {isCategory ? (
        <div className="flex flex-col items-center">
          <img src={iconFood} className={imageClass} alt={foodName} />
          <span className={foodNameClass}>{foodName}</span>
          <span className={foodCategoryClass}>{amountFood} items</span>
        </div>
      ) : (
        ""
      )}

      {isTrending ? (
        <>
          <img src={foodImage} alt={foodName} className={imageClass} />
          <div className="flex justify-center flex-col">
            <p className={foodNameClass}>{foodName}</p>
            <p className={foodCategoryClass}>{foodCategory}</p>
            <Star
              starValue={starValue}
              starWidth={10}
              starHeight={10}
              starSpacing={16}
            />
          </div>
        </>
      ) : (
        ""
      )}

      <div>{children}</div>
    </div>
  );
};
