import { useRef } from "react";
import { CategoryFoodList } from "../../Food/Category/CategoryFoodList";
import "./style.scss";
import { Card } from "../Card";
import { Button } from "../Button";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const Carousel = () => {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="container mt-10">
      <>
        <div className="carousel" ref={carousel}>
          {CategoryFoodList.map(({ image, name, bgColor, items }, id) => {
            return (
              <Card
                key={id}
                isCategory={true}
                iconFood={image}
                imageClass="w-12 mb-6"
                cardClass={`${bgColor} cursor-pointer item w-56 flex-none rounded-lg mr-2 flex items-center justify-center p-8`}
                foodName={name}
                amountFood={items}
                foodNameClass="text-base"
                foodCategoryClass="text-sm"
              />
            );
          })}
        </div>
      </>

      <div className="justify-end hidden sm:flex xl:mr-28 lg:mr-10 md:mr-8 mr-4">
        <Button
          isText={true}
          text="Prev"
          isIconLeft={true}
          onClick={handleLeftClick}
          className="bg-lime-8bac3e rounded-full text-base text-white mr-2 p-2"
        >
          <RiArrowLeftSLine className="mr-2 h-6 w-6 bg-white rounded-full text-lime-8bac3e" />
        </Button>

        <Button
          isText={true}
          text="Next"
          isIconRight={true}
          onClick={handleRightClick}
          className="bg-lime-8bac3e rounded-full text-base text-white ml-2 p-2"
        >
          <RiArrowRightSLine className="ml-2 h-6 w-6 bg-white rounded-full text-lime-8bac3e" />
        </Button>
      </div>
    </div>
  );
};
