import React from "react";
import { NavList } from "./NavList";
import { CTAList } from "./CTAList";
import { Button } from "../common/Button";
import { Logo } from "../common/Logo";

export const NavBar = () => {
  return (
    <div className="mx-28 h-24 flex items-center justify-between">
      <Button isIcon={true}>
        <Logo />
      </Button>

      <div className="flex">
        {NavList.map(({ title, isHot }, id) => {
          return (
            <Button
              key={id}
              isText={true}
              text={title}
              isHot={isHot}
              className={`${
                isHot ? "relative inline-block" : ""
              } px-4 font-medium text-gray-757575`}
            />
          );
        })}
      </div>

      <div className="flex">
        {CTAList.map(({ title, isPrimary }, id) => {
          return (
            <Button
              key={id}
              isText={true}
              text={title}
              isPrimary={isPrimary}
              className="font-medium py-2 px-4"
            />
          );
        })}
      </div>
    </div>
  );
};
