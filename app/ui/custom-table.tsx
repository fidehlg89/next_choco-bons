'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

interface Column {
  key: string;
  title: string;
  className: string;
  render?: (item: any) => React.ReactNode;
}

interface ObjectTableProps {
  data: any[];
}

const CustomTable: React.FC<ObjectTableProps> = ({ data }) => {
  console.log('🚀 ~ file: custom-table.tsx:25 ~ data:', data);
  const currentPath = usePathname();
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <table className="hidden min-w-full text-gray-900 md:table">
      <thead className="rounded-lg text-left text-lg font-normal">
        <tr>
          {columns.map((key, index) => (
            <>
              {key !== 'id' && (
                <th
                  key={index}
                  scope="col"
                  className="px-4 py-5 font-medium capitalize sm:pl-6"
                >
                  {key}
                </th>
              )}
            </>
          ))}
          <th scope="col" className="relative py-3 pl-6 pr-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data.map((item) => (
          <tr
            key={item.id}
            className="w-full border-b py-3 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            {columns.map((key, index) => {
              if (key === 'id') {
                return null;
              }
              return (
                <td
                  key={index}
                  className="px-4 py-5 font-medium capitalize sm:pl-6"
                >
                  {item[key]}
                </td>
              );
            })}
            {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
              {onEdit && (
                <Link
                  href={`/dashboard${currentPath}/${item.id}/edit`}
                  className="rounded-md border p-2 hover:bg-gray-100"
                >
                  <PencilIcon className="w-5" />
                </Link>
              )}
              {onDelete && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onDelete(item.id);
                  }}
                >
                  <button
                    type="submit"
                    className="rounded-md border p-2 hover:bg-gray-100"
                  >
                    <span className="sr-only">Delete</span>
                    <TrashIcon className="w-4" />
                  </button>
                </form>
              )}
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
