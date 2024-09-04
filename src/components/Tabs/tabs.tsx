// import React from "react";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// interface OrderTabsProps {
//   tabs: string[];
//   onTabChange: (tabIndex: number) => void;
//   children: React.ReactNode[]; 
// }

// const OrderTabs: React.FC<OrderTabsProps> = ({ tabs, onTabChange, children }) => {
//   const [selectedTab, setSelectedTab] = React.useState<number>(0);

//   const handleTabChange = (value: string) => {
//     const index = Number(value);
//     setSelectedTab(index);
//     onTabChange(index);
//   };

//   return (
//     <div>
//       <Tabs defaultValue="0" onValueChange={handleTabChange}>
//         <TabsList className="flex justify-between border-b-2 border-gray-300">
//           {tabs.map((tab, index) => (
//             <div key={index} className="relative flex-1 text-center bg-white">
//               <TabsTrigger
//                 value={index.toString()}
//                 className={`cursor-pointer rounded-none ${
//                   selectedTab === index ? "text-orange-500 font-bold border-b-2 border-orange-500" : "text-gray-800"
//                 }`}
//               >
//                 {tab}
//               </TabsTrigger>
//             </div>
//           ))}
//         </TabsList>
//         {children.map((child, index) => (
//           <TabsContent key={index} value={index.toString()}>
//             {child}
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
// };

// export default OrderTabs;


import React, { useState } from "react";

interface OrderTabsProps {
  tabs: string[];
  onTabChange: (tabIndex: number) => void;
  children: React.ReactNode[];
  rounded?: boolean; // Prop to determine if tabs should have rounded borders
}

const OrderTabs: React.FC<OrderTabsProps> = ({ tabs, onTabChange, children, rounded = false }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    onTabChange(index);
  };

  return (
    <div className="w-full">
      <div
        className={`flex  ${
          rounded ? " gap-5 rounded-md overflow-hidden" : "border-b border-gray-300"
        }`}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={`flex-1 py-2 px-4 text-center transition-colors duration-300 ${
              selectedTab === index
                ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                : "text-gray-800 hover:text-gray-600"
            } ${
              rounded
                ? " border-2 rounded-full"
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {children[selectedTab]}
      </div>
    </div>
  );
};

export default OrderTabs;
