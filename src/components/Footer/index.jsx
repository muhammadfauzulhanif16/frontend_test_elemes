import React from "react";
import { Card } from "../common/Card";
import { Button } from "../common/Button";
import { RiMailLine, RiPhoneLine, RiInstagramLine } from "react-icons/ri";
import { Logo } from "../common/Logo";
import { CategoryFoodList } from "../Food/Category/CategoryFoodList";
import { AboutList } from "./AboutList";

export const Footer = () => {
  return (
    <div className="px-28 pt-48">
      <Card cardClass="bg-white-f9fff6 rounded-1.25 px-3.875 py-20 bg-white-f9eef3 w-full h-full">
        <div className="grid grid-cols-4">
          <>
            <Button isIcon={true} className="mb-5">
              <Logo />
            </Button>

            <p className="text-sm text-gray-757575">
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
          </>

          <div className="pl-16">
            <Card
              isText={true}
              title="Categories"
              cardClass="flex align-center flex-col"
            >
              <div className="mt-8">
                {CategoryFoodList.map(({ name }) => {
                  return (
                    <Button
                      isText={true}
                      text={name}
                      className="text-gray-757575"
                    />
                  );
                })}
              </div>
            </Card>
          </div>

          <div className="pl-16">
            <Card
              isText={true}
              title="About Us"
              cardClass="flex align-center flex-col"
            >
              <div className="mt-8">
                {AboutList.map((name) => {
                  return (
                    <Button
                      isText={true}
                      text={name}
                      className="text-gray-757575"
                    />
                  );
                })}
              </div>
            </Card>
          </div>

          <div>
            <Card
              isText={true}
              title="Newsletter"
              cardClass="flex align-center flex-col"
            >
              <p className="mt-8 text-gray-757575">
                Get now free 50% discount for all products on your first order
              </p>

              <div className="mt-5 flex">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="p-2 flex-1 w-full rounded-none text-black rounded-l-md outline-solid-black"
                  placeholder="Your email address"
                />
                <span className="p-2 inline-flex items-center px-3 rounded-r-md bg-gray-50 text-white text-sm font-medium bg-lime-8bac3e outline-lime-8bac3e">
                  SEND
                </span>
              </div>
            </Card>
          </div>
        </div>
      </Card>
      <p className="py-10 text-center text-xs text-gray-757575">
        © 2021 ELEMES ID. ALL RIGHTS RESERVER
      </p>
    </div>
  );
};
