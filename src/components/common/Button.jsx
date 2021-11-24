import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export const Button = ({
  className,
  isText,
  text,
  isIcon,
  isIconRight,
  isIconLeft,
  isHot,
  children,
  isPrimary,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} ${
        isPrimary ? "bg-lime-8bac3e text-white rounded-full" : ""
      }`}
    >
      {isText ? (
        <span className="flex items-center">
          {isIconLeft ? (
            <ChevronLeftIcon className="mr-2 h-6 w-6 bg-white rounded-full text-lime-8bac3e" />
          ) : (
            ""
          )}

          {text}

          {isHot ? (
            <span className="absolute w-2.25 -top-1.5 right-5 inline-flex items-center justify-center px-2 py-1 text-xxs font-bold text-white transform translate-x-1/2 -translate-y-1/2 h-1.1875 bg-red-e7462d rounded-lg">
              Hot
            </span>
          ) : (
            ""
          )}

          {isIconRight ? (
            <ChevronRightIcon className="ml-2 h-6 w-6 bg-white rounded-full text-lime-8bac3e" />
          ) : (
            ""
          )}
        </span>
      ) : isIcon ? (
        // <img src={icon} alt="" />
        <>{children}</>
      ) : (
        ""
      )}
    </div>
  );
};
