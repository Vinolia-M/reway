import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  items: { label: string, href: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-Reway-darkgrey font-sans text-16 mt-[50px] mr-[219px] mb-[15px] ml-[219px]">
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
