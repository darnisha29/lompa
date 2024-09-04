// import React, { useState } from 'react';
// // import {
// //   DropdownMenu,
// //   DropdownMenuTrigger,
// //   DropdownMenuContent,
// //   DropdownMenuItem
// // } from '@/components/ui/dropdown'; // Update the path if needed
// import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'; // Use these icons or import your preferred icons
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

// interface DropdownProps {
//   items: string[];
//   onSelect: (item: string) => void;
//   placeholder?: string;
// }

// const Dropdown: React.FC<DropdownProps> = ({ items, onSelect, placeholder = "Select an option" }) => {
//   const [open, setOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState<string | null>(null);

//   const handleSelect = (item: string) => {
//     setSelectedItem(item);
//     onSelect(item);
//     setOpen(false); 
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <DropdownMenu open={open} onOpenChange={setOpen}>
//         <DropdownMenuTrigger
//           className="flex items-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer bg-white hover:bg-gray-100"
//         >
//           <span className="flex-1 text-gray-700">{selectedItem || placeholder}</span>
//           {open ? (
//             <ChevronUpIcon className="w-5 h-5 text-gray-500" />
//           ) : (
//             <ChevronDownIcon className="w-5 h-5 text-gray-500" />
//           )}
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
//           {items.map((item, index) => (
//             <DropdownMenuItem
//               key={index}
//               className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
//               onClick={() => handleSelect(item)}
//             >
//               {item}
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// };

// export default Dropdown;


import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

interface DropdownProps {
  items?: string[];
  onSelect: (item: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items = [], onSelect, placeholder = "Select an option" }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center px-4 py-1.5 border border-gray-300 rounded-md cursor-pointer bg-white hover:bg-gray-100"
      >
        <span className="flex-1 text-gray-700">{selectedItem || placeholder}</span>
        {open ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {open && (
        <div className="absolute left-0 top-full  w-full max-w-xs bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">
              No options available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
