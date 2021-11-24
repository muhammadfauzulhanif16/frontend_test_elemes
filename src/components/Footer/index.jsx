import React from "react";
import { Card } from "../common/Card";
import { Button } from "../common/Button";
import { RiMailLine, RiPhoneLine, RiInstagramLine } from "react-icons/ri";
import { Logo } from "../common/Logo";
import { CategoryFoodList } from "../Food/Category/CategoryFoodList";

export const Footer = () => {
  return (
    <div className="px-28 pt-48">
      <Card cardClass="bg-white-f9fff6 rounded-1.25 px-3.875 py-20 bg-white-f9eef3 w-full h-full">
        <div className="flex">
          <div className="flex-1">
            <Button isIcon={true} className="mb-5">
              <Logo />
            </Button>

            <p className="text-sm">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,Kecamatan
              Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12950
            </p>

            <div className="flex mt-8">
              <Button
                isIcon={true}
                className="w-10 h-10 flex items-center justify-center bg-white mr-1 rounded-full hover:bg-lime-8bac3e hover:text-white text-lime-8bac3e"
              >
                <RiMailLine />
              </Button>
              <Button
                isIcon={true}
                className="w-10 h-10 flex items-center justify-center bg-white mr-1 rounded-full hover:bg-lime-8bac3e hover:text-white text-lime-8bac3e"
              >
                <RiPhoneLine />
              </Button>
              <Button
                isIcon={true}
                className="w-10 h-10 flex items-center justify-center bg-white mr-1 rounded-full hover:bg-lime-8bac3e hover:text-white text-lime-8bac3e"
              >
                <RiInstagramLine />
              </Button>
            </div>
          </div>

          <div className="flex-1 bg-red-100">
            <Card
              isText={true}
              title="Categories"
              cardClass="flex justify-center"
            >
              {CategoryFoodList.map(({ name }) => {
                return <Button isText={true} title={name} />;
              })}
            </Card>
          </div>
          <div className="flex-1 bg-red-200">
            <Card
              isText={true}
              title="About Us"
              cardClass="flex justify-center"
            >
              <Button />
            </Card>
          </div>
          <div className="flex-1 bg-red-300">
            <Card
              isText={true}
              title="Newsletter"
              cardClass="flex justify-center"
            >
              <Button />
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};
