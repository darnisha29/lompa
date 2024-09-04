"use client"
import React, { useState } from "react";
// import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";

interface SidebarSectionProps {
  title: string;
  icon?: React.ReactNode;
  links: { name: string; href: string; isActive?: boolean }[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, icon, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="flex items-center justify-between w-full p-4 text-gray-700 hover:bg-gray-100 focus:outline-none"
        onClick={toggleSection}
      >
        <span className="flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          {title}
        </span>
        {/* {isOpen ? (
        //   <ChevronDownIcon className="w-4 h-4" />
        ) : (
          <ChevronRightIcon className="w-4 h-4" />
        )} */}
      </button>
      {isOpen && (
        <ul className="pl-8">
          {links.map((link, index) => (
            <li key={index} className="py-2">
              <a
                href={link.href}
                className={`${
                  link.isActive ? "text-red-500" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidebarSection;
