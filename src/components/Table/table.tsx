
import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface TableColumn<T> {
  header: string;
  accessor: keyof T;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  caption?: string;
  loading?: boolean;
  rowsPerPage?: number;
}

export const CustomTable = <T,>({
  data,
  columns,
  caption,
  loading,
  rowsPerPage = 2,
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'ascending' | 'descending' } | null>(null);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const sortedData = useMemo(() => {
    let sortableItems = [...paginatedData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [paginatedData, sortConfig]);

  const handleSort = (key: keyof T) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-col">
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
                className="px-4 py-3 text-left text-gray-700 font-medium border-b border-gray-200 cursor-pointer"
                onClick={() => column.sortable && handleSort(column.accessor)}
              >
                {column.header}
                {column.sortable && sortConfig?.key === column.accessor && (
                  <span className={`ml-2 ${sortConfig.direction === 'ascending' ? 'text-blue-500' : 'text-gray-500'}`}>
                    {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                  </span>
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            Array.from({ length: rowsPerPage }).map((_, rowIndex) => (
              <TableRow key={rowIndex} className="border-b border-gray-200">
                {columns.map((_, colIndex) => (
                  <TableCell key={colIndex} className="px-4 py-4">
                    <Skeleton className="h-4 w-50 rounded-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            sortedData.map((item, rowIndex) => (
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
            ))
          )}
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          >
            &lt;
          </button>
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-lg ${
                page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
