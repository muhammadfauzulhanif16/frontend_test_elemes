import { useRef } from "react";
import { CategoryFoodList } from "../../Food/Category/CategoryFoodList";
import "./style.css";
import { Card } from "../Card";
import { Button } from "../Button";

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
      <div className="carousel" ref={carousel}>
        {CategoryFoodList.map(({ image, name, bgColor, items }, id) => {
          return (
            <Card
              key={id}
              isCategory={true}
              iconFood={image}
              imageClass="w-12 mb-6"
              cardClass={`${bgColor}  item w-56 flex-none rounded-lg mr-2 flex items-center justify-center p-8`}
              foodName={name}
              amountFood={items}
              foodNameClass="text-base"
              foodCategoryClass="text-sm"
            />
          );
        })}
      </div>

      <div className="justify-end flex mt-12 mr-28">
        <Button
          isText={true}
          text="Prev"
          isIconLeft={true}
          onClick={handleLeftClick}
          className="bg-lime-8bac3e rounded-full text-base text-white mr-2 p-2"
        />

        <Button
          isText={true}
          text="Next"
          isIconRight={true}
          onClick={handleRightClick}
          className="bg-lime-8bac3e rounded-full text-base text-white ml-2 p-2"
        />
      </div>
    </div>
  );
};
