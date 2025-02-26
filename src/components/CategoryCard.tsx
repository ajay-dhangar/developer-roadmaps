import React from 'react';
import { XIcon as Icon } from 'lucide-react';
import * as icons from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  isActive: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, isActive }) => {
  const IconComponent = icons[category.icon as keyof typeof icons] as React.ElementType;

  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-xl transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 text-white shadow-lg scale-[1.02]'
          : 'bg-white hover:bg-blue-50 hover:scale-[1.02]'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-500' : 'bg-blue-100'}`}>
          <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-blue-600'}`} />
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold">{category.name}</h3>
          <p className={`text-sm mt-1 ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
            {category.description}
          </p>
        </div>
      </div>
    </button>
  );
};