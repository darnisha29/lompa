import React from "react";
import { cn } from "@/lib/utils";

// interface NavbarProps {
//   logo?: React.ReactNode; 
//   links: { name: string; href: string }[];
//   rightElements?: React.ReactNode; 
// }

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md flex justify-between pl-10 pt-2 pb-2 z-[9999] fixed w-full top-0 left-0 mb-20">
      <div className="flex gap-10">
        <p className="text-gray-700 text-2xl">Home</p>
        <p className=" text-2xl">My Orders</p>
      </div>
      <div className="flex gap-5 pr-10">
        <div>i1</div>
        <div>i1</div>
        <div className="pr-8 border-r-2 border-black">i1</div>

        <p className="font-xl ">text</p>

      </div>

    </nav>

  );
};

export default Navbar;
