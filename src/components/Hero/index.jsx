import React from "react";
import GreenSaladTomato from "../../images/foods/Green Salad Tomato.svg";
import { Button } from "../common/Button";
import { Card } from "../common/Card";

export const Hero = () => {
  return (
    <div className="flex xl:mx-28 lg:mx-10 md:mx-8 mx-4">
      <div className="flex-1 flex justify-center flex-col pr-8">
        <h1 className="text-primary text-6xl font-medium text-lime-8bac3e w-full sm:w-2/3 md:w-full">
          Good Food Us Good Mood
        </h1>

        <div className="hidden">
          <div className="p-12 rounded-full bg-food-transparant">
            <img src={GreenSaladTomato} alt="Green Salad Tomato" />

            <Card
              isTrending={true}
              foodImage={GreenSaladTomato}
              foodName="Green Salad Tomato"
              foodNameClass="font-semibold leading-none"
              foodCategory="Tomato"
              cardClass="p-6 absolute flex transform translate-x-1/2 -translate-y-1/2"
              imageClass="mr-6 w-14"
              foodCategoryClass="text-gray-757575 font-normal text-xs leading-loose"
              starValue={4}
            />
          </div>
        </div>

        <div className="md:hidden">
          <div className="p-12 rounded-full bg-food-transparant">
            <img src={GreenSaladTomato} alt="Green Salad Tomato" />

            <Card
              isTrending={true}
              foodImage={GreenSaladTomato}
              foodName="Green Salad Tomato"
              foodNameClass="font-semibold leading-none"
              foodCategory="Tomato"
              cardClass="p-6 absolute flex transform translate-x-1/2 -translate-y-1/2 trending-food-card"
              imageClass="mr-6 w-14"
              foodCategoryClass="text-gray-757575 font-normal text-xs leading-loose"
              starValue={4}
            />
          </div>
        </div>

        <p className="py-8 text-lg">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a
          lotof theood that we buy.
        </p>

        <div className="flex">
          <Button
            isText={true}
            text="Daftar Sekarang"
            isPrimary={true}
            className="font-medium py-2 px-4 mr-2 shadow-primary"
          />

          <Button
            isText={true}
            text="About Us"
            className="font-medium py-2 px-4 ml-2 bg-white-f2f2f2 rounded-full"
          />
        </div>
      </div>

      <div className="hidden md:flex flex-1">
        <div className="p-12 rounded-full bg-food-transparant">
          <img src={GreenSaladTomato} alt="Green Salad Tomato" />

          <Card
            isTrending={true}
            foodImage={GreenSaladTomato}
            foodName="Green Salad Tomato"
            foodNameClass="font-semibold leading-none"
            foodCategory="Tomato"
            cardClass="p-6 absolute flex transform translate-x-1/2 -translate-y-1/2 trending-food-card"
            imageClass="mr-6 w-14"
            foodCategoryClass="text-gray-757575 font-normal text-xs leading-loose"
            starValue={4}
          />
        </div>
      </div>
    </div>
  );
};
