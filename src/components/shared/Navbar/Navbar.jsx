import React from "react";
import MyLink from "./MyLink";
import logoImage from '@/assets/images/logo.png'
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";



const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
      icon: <GoHome />
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <IoTimeOutline />
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <TfiStatsUp />
    },

  ];

  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center container mx-auto">
        <Image
        src={logoImage}
        alt='logo image'
        
        />

        <ul className="flex justify-between gap-2 items-center">
          {navItems.map((item, index) => (
            // Client component
           
            <MyLink key={index} href={item.path}>
             {item.icon} {item.text} 
            </MyLink>
          ))}

         
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;