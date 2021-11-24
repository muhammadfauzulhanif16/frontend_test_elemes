import React from "react";
import { Card } from "../../common/Card";
import { TrendingFoodList } from "./TrendingFoodList";
import { Button } from "../../common/Button";

export const Trending = () => {
  return (
    <Card
      isText={true}
      cardClass="py-12 px-28 text-4xl font-medium"
      title="Browse Our Trending"
      info="Receipt"
    >
      <div className="grid grid-cols-4 gap-4 mt-10">
        {TrendingFoodList.map(
          ({ image, name, category, rate, bgColor }, id) => {
            return (
              <Card
                isTrending={true}
                key={id}
                foodImage={image}
                foodName={name}
                foodCategory={category}
                starValue={rate}
                cardClass={`${bgColor} p-6 rounded-2xl font-medium shadow-second`}
                foodNameClass="text-xl mt-4"
                foodCategoryClass="text-lg text-lime-8bac3e mb-2"
                imageClass="rounded-md"
              />
            );
          }
        )}
      </div>

      <div className="flex justify-center">
        <Button
          isPrimary={true}
          isText={true}
          text="All Receipt"
          className="text-base flex items-center justify-center w-40 py-2 mt-16"
        />
      </div>
    </Card>
  );
};
