//^ PRODUCTS COMPONENT
import React from 'react';
type productType = { id: number; title: string; price: string };

const Products = async () => {
  const request = await fetch('https://fakestoreapi.com/products');
  const reponse = await request.json();

  return (
    <div>
      <ul className="w-full h-fit p-8 flex flex-col items-start justify-center space-y-6 text-2xl rounded-lg bg-zinc-600/50">
        {reponse.slice(0, 10).map((product: productType) => (
          <li key={product.id}>
            {product.id} - {product.title.slice(0, 30)} || {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
