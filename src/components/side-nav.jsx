import React, { useState } from "react";
import MobNav from "./mob-nav";
import {  AiOutlineMenu } from "react-icons/ai";
import SideNavIcons from "./side-nav-icons";

export default function Side() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="z-[200]">
      <AiOutlineMenu
        onClick={handleNav}
        size={20}
        className="absolute cursor-pointer top-4 right-4 font-bold md:hidden z-[21] "
      />

      {nav ? <MobNav /> : <></>}

      <SideNavIcons />
    </div>
  );
}
