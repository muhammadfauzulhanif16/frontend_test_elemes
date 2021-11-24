import React from "react";
import { Card } from "../common/Card";
import { Button } from "../common/Button";
import ElemesLogo from "../../images/Elemes Indonesia.svg";
import { RiMailLine, RiPhoneLine, RiInstagramLine } from "react-icons/ri";
import { Logo } from "../common/Logo";

export const Footer = () => {
  return (
    <div className="px-28 pt-48">
      <Card cardClass="rounded-1.25 px-3.875 py-20 bg-white-f9eef3 w-full h-full">
        <div className="flex">
          <div className="flex-1">
            <Button isIcon={true}>
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
          <div className="flex-1">2</div>
          <div className="flex-1">3</div>
          <div className="flex-1">4</div>
        </div>
      </Card>
    </div>
  );
};
