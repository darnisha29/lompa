// import React from "react";
// import {
//   Table,
//   TableHeader,
//   TableBody,
//   TableFooter,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableCaption,
// } from "@/components/ui/table";

// interface TableColumn<T extends { [key: string]: React.ReactNode }> {
//   header: string;
//   accessor: keyof T;
//   render?: (item: T) => React.ReactNode;
// }

// interface TableProps<T extends { [key: string]: React.ReactNode }> {
//   data: T[];
//   columns: TableColumn<T>[];
//   caption?: string;
// }

// export const CustomTable = <T extends { [key: string]: React.ReactNode }>({
//   data,
//   columns,
//   caption,
// }: TableProps<T>) => {
//   return (
//     <Table>
//       {caption && <TableCaption>{caption}</TableCaption>}
//       <TableHeader>
//         <TableRow>
//           {columns.map((column, index) => (
//             <TableHead key={index}>{column.header}</TableHead>
//           ))}
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {data.map((item, rowIndex) => (
//           <TableRow key={rowIndex}>
//             {columns.map((column, colIndex) => (
//               <TableCell key={colIndex}>
//                 {column.render ? column.render(item) : item[column.accessor]}
//               </TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TableCell colSpan={columns.length}>
//             {/* You can add footer content here if needed */}
//           </TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
//   );
// };


import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

interface Order {
  username: string;
  product: string;
  variation: string;
  price: string;
  paymentMethod: string;
  status: string;
  countdown: string;
  shippingChannel: string;
  actions: React.ReactNode;
  [key: string]: React.ReactNode;
}

interface TableColumn<T> {
  header: string;
  accessor: keyof T;
  render?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  caption?: string;
}

export const CustomTable = <T,>({ data, columns, caption }: TableProps<T>) => {
  return (
    <Table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
      {caption && (
        <TableCaption className="font-semibold text-left text-gray-700">
          {caption}
        </TableCaption>
      )}
      <TableHeader className="bg-gray-100">
        <TableRow>
          {columns.map((column, index) => (
            <TableHead
              key={index}
              className="px-4 py-3 text-left text-gray-700 font-medium border-b border-gray-200"
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, rowIndex) => (
          <TableRow
            key={rowIndex}
            className="hover:bg-gray-50 border-b border-gray-200"
          >
            {columns.map((column, colIndex) => (
              <TableCell
                key={colIndex}
                className="px-4 py-4 text-gray-800 align-middle"
              >
                {column.render
                  ? column.render(item)
                  : (item[column.accessor] as React.ReactNode)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
