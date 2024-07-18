'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PriceRange {
  label: string;
  min?: number;
  max?: number;
}

const priceRanges: PriceRange[] = [
  { label: 'Under $25', max: 25 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: 'Over $200', min: 200 },
  { label: 'None' }, // Added "None" option
];

export const PriceFilter: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedMin = searchParams.get('min') || '';
  const selectedMax = searchParams.get('max') || '';

  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const getLinkHref = (min?: number, max?: number) => {
    const params = new URLSearchParams(searchParams);
    if (min !== undefined) {
      params.set('min', min.toString());
    } else {
      params.delete('min');
    }
    if (max !== undefined) {
      params.set('max', max.toString());
    } else {
      params.delete('max');
    }
    return `${pathname}?${params.toString()}`;
  };

  const handlePriceRangeClick = (min?: number, max?: number) => {
   
    setIsOpen(false);
  };

  return (
    <div className="relative z-10 inline-block text-left">
      <button
        onClick={toggleFilter}
        type="button"
        className="bg-gray-200 px-4 py-2 rounded-md inline-flex items-center"
      >
        Price
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {priceRanges.map((range) => (
              <Link
                key={range.label}
                href={getLinkHref(range.min, range.max)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                  selectedMin === range.min?.toString() && selectedMax === range.max?.toString()
                    ? 'bg-blue-500 text-white'
                    : ''
                }`}
                role="menuitem"
                onClick={() => handlePriceRangeClick(range.min, range.max)} // Close on click
              >
                {range.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};