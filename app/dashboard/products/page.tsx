import React from 'react';
import { fetchProducts } from '@/app/lib/data';
import CustomTable from '@/app/ui/custom-table';

export default async function page() {
  const products = await fetchProducts();

  const columns = [
    {
      key: 'name',
      title: 'Customer',
      className: 'px-4 py-5 font-medium sm:pl-6',
    },
    { key: 'email', title: 'Email', className: 'px-3 py-5 font-medium' },
    { key: 'amount', title: 'Amount', className: 'px-3 py-5 font-medium' },
    { key: 'date', title: 'Date', className: 'px-3 py-5 font-medium' },
    { key: 'status', title: 'Status', className: 'px-3 py-5 font-medium' },
  ];

  
  return (
    <div>
      <CustomTable
        data={products}
      />
      {products.length > 0 &&
        products.map((product) => {
          return <li key={product.id}>{product.description}</li>;
        })}
    </div>
  );
}
