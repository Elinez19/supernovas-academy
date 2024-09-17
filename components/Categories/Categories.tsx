"use client";

import { useState } from "react";

interface Category {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  borderColor: string;
  iconColor: string;
}

interface CategoriesProps {
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const [filter, setFilter] = useState<string>("");

  const filteredCategories = filter
    ? categories.filter(category =>
        category.title.toLowerCase().includes(filter.toLowerCase())
      )
    : categories;

  const handleFilterClick = (categoryTitle: string) => {
    setFilter(categoryTitle);
  };

  return (
    <section className="py-24 relative bg-gradient-to-r from-[#E3F6E9] via-[#F4F1F9] to-[#E3F6E9]">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        {/* Header Section */}
        <div className="w-full flex flex-col justify-start items-center lg:gap-11 gap-8">
          <div className="w-full flex flex-col justify-start items-center gap-2.5">
            <h2 className="text-center text-gray-900 text-3xl font-bold leading-normal">
              Find out by Popular Categories
            </h2>
            <p className="max-w-4xl mx-auto text-center text-gray-600 text-lg leading-8">
              We offer a brand new approach to learning. Choose from a wide range of learning options and gain new skills!
            </p>
          </div>

          {/* Popular Categories Filter Section */}
          <div className="w-full flex justify-center flex-wrap gap-4 mb-8">
            {categories.map(category => (
              <div
                key={category.id}
                className={`cursor-pointer flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-300 ease-in-out ${
                  filter === category.title
                    ? `${category.borderColor} bg-indigo-600 text-white`
                    : `border-gray-300 ${category.borderColor}`
                }`}
                onClick={() => handleFilterClick(category.title)}
              >
                <span className="text-2xl" style={{ color: category.iconColor }}>
                  {category.icon}
                </span>
                <p className="text-sm font-semibold">{category.title}</p>
              </div>
            ))}
          </div>

          {/* Filtered Categories Display */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map(category => (
                <div
                  key={category.id}
                  className="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex justify-center items-center hover:bg-gray-100"
                >
                  <div className="flex flex-col justify-start items-center gap-3.5">
                    <a href="#">
                      <span className="hover:text-indigo-600 transition-colors">
                        {category.icon}
                      </span>
                    </a>
                    <h4 className="text-center text-gray-900 text-lg font-semibold hover:text-indigo-600 transition-colors">
                      {category.title}
                    </h4>
                    <p className="text-center text-gray-500 text-sm hover:text-gray-700 transition-colors">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No categories found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
