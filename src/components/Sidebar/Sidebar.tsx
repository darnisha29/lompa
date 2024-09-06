import React from "react";
import SidebarSection from "./SidebarSection";

const Sidebar = () => {
  const sections = [
    {
      title: "Order",
      icon: "📦",
      links: [
        { name: "My Orders", href: "#", isActive: true },
        { name: "Mass Ship", href: "#" },
        { name: "Cancellation", href: "#" },
        { name: "Return/Refund", href: "#" },
        { name: "Shipping Setting", href: "#" },
      ],
    },
    {
      title: "Product",
      icon: "📦",
      links: [
        { name: "My Products", href: "#" },
        { name: "Add New Product", href: "#" },
        { name: "My Inventory", href: "#" },
      ],
    },
    {
      title: "Marketing Centre",
      icon: "🏷️",
      links: [
        { name: "Marketing Centre", href: "#" },
        { name: "Shopee Ads", href: "#" },
        { name: "Affiliate Marketing", href: "#" },
        { name: "Live", href: "#" },
        { name: "Discount", href: "#" },
        { name: "My Shop's Flash Sale", href: "#" },
        { name: "Vouchers", href: "#" },
        { name: "Campaign", href: "#" },
      ],
    }, {
      title: "Marketing Centre",
      icon: "🏷️",
      links: [
        { name: "Marketing Centre", href: "#" },
        { name: "Shopee Ads", href: "#" },
        { name: "Affiliate Marketing", href: "#" },
        { name: "Live", href: "#" },
        { name: "Discount", href: "#" },
        { name: "My Shop's Flash Sale", href: "#" },
        { name: "Vouchers", href: "#" },
        { name: "Campaign", href: "#" },
      ],
    },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r  smooth overflow-y-auto mr-10  " >
      <div className="p-4 scroll-behavior:">
        <h2 className="text-lg font-semibold">Sidebar</h2>
      </div>
      <nav className="mt-4">
        {sections.map((section, index) => (
          <SidebarSection
            key={index}
            title={section.title}
            icon={section.icon}
            links={section.links}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
