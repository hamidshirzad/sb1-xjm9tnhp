import React, { useState } from 'react';
import { InventoryList } from './InventoryList';
import { ProductForm } from './ProductForm';

export function InventoryDashboard() {
  const [products, setProducts] = useState([]);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Inventory Management</h2>
        <ProductForm />
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Current Inventory</h2>
        <InventoryList products={products} />
      </div>
    </div>
  );
}