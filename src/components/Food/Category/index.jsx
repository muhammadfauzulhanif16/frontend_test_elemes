import React from "react";
import { Card } from "../../common/Card";
import { Carousel } from "../../common/Carousel";

export const Category = () => {
  return (
    <Card
      isText={true}
      cardClass="py-12 xl:pl-28 lg:pl-10 md:pl-8 pl-4 text-4xl font-medium "
      title="Browse Our Category"
      info="Receipt"
    >
      <Carousel />
    </Card>
  );
};
