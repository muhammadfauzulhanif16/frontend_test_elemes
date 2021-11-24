import React from "react";
import { NavList } from "./NavList";
import { CTAList } from "./CTAList";
import { Button } from "../common/Button";
import { Logo } from "../common/Logo";
import { RiMenuFill } from "react-icons/ri";

export const NavBar = () => {
  return (
    <>
      <div className="xl:mx-28 lg:mx-10 md:mx-8 mx-4 h-24 flex items-center justify-between">
        <Button isIcon={true}>
          <Logo />
        </Button>

        <div className="hidden lg:flex">
          {NavList.map(({ title, isHot }, id) => {
            return (
              <Button
                key={id}
                isText={true}
                text={title}
                isHot={isHot}
                className={`${
                  isHot ? "relative inline-block" : ""
                } flex px-4 font-medium text-gray-757575`}
              />
            );
          })}
        </div>

        <div className="flex">
          {CTAList.map(({ title, isPrimary, className }, id) => {
            return (
              <Button
                key={id}
                isText={true}
                text={title}
                isPrimary={isPrimary}
                className={`${className} font-medium py-2 px-4`}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full fixed justify-between flex bottom-0 bg-white py-2 px-4 sm:hidden z-50">
        <Button
          isIconTop={true}
          isText={true}
          text="Home"
          className="text-gray-757575 text-sm"
        >
          <RiMenuFill />
        </Button>
        <Button
          isIconTop={true}
          isText={true}
          text="Promotions"
          className="text-gray-757575 text-sm"
        >
          <RiMenuFill />
        </Button>
        <Button
          isIconTop={true}
          isText={true}
          text="Others"
          className="text-gray-757575 text-sm"
        >
          <RiMenuFill />
        </Button>
      </div>
    </>
  );
};
