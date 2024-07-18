'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

interface FilterCategory {
  label: string;
  value: string;
}

export const Filter = ({ params }: { params: { name: string } }) => {
  
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get('category');

  const filterCategories: FilterCategory[] = [
    { label: "Clothes", value: "Clothing" },
    { label: "Footwear", value: "Footwear" },
    { label: "Accessories", value: "Accessories" },
    { label: "Electronics", value: "Electronics" },
  ];

  return (
    <nav className="mb-5">
      <ul className="flex flex-wrap gap-8">
        {filterCategories.map((filter) => (
          <li key={filter.value}>
            <Link
              href={`/products/${params.name}?category=${filter.value}`}
              className={`bg-gray-200 px-3 py-2 rounded-md ${
                selectedCategory === filter.value ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {filter.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Filter;