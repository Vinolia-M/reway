import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  items: { label: string, href: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-gray-600 mb-4">
      {items.map((item, index) => (
        <span key={index}>
          <Link href={item.href} className={`hover:underline ${item.label === 'Home' || item.label === 'Boots' ? 'text-blue-500' : ''}`}>
            {item.label}
          </Link>
          {index < items.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
