"use client";

import { useEffect, useState } from "react";
import CategoryCard from "../home/CategoryCard";
import { getCategories } from "../../services/productService";

export default function CategoryList() {
  const [categories, setCategories] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((err) => {
        console.error("Categories error:", err);
        setCategories([]);
      });
  }, []);

  const initialVisibleCount = 6;
  const displayedCategories = showAll ? categories : categories.slice(0, initialVisibleCount);

  return (
    <section className="
    py-16 px-5 md:px-8 lg:px-12 max-w-7xl mx-auto relative mt-[-100]">
      <div className="relative mb-10" style={{ height: '80px' }}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Categories
        </h2>

        {categories.length > initialVisibleCount && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="absolute w-50 h-15 -top-6.5 left-250 bg-[#E7FAFE] rounded-2xl
              border border-gray-200
              text-[#000000]
              font-inter
              text-[16px]
              leading-none
              tracking-[-0.02em]
              shadow-sm
              hover:shadow-md
              hover:brightness-98
              transition-all duration-200
              flex items-center justify-center
            "
          >
            {showAll ? "Show Less" : "View All Categories"}
          </button>
        )}
      </div>

      {/* Categories cards */}
      {categories.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          Loading categories...
        </div>
      ) : (
        <div
          className={`
           
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            xl:grid-cols-6 
            gap-6
            ${showAll ? 'gap-y-10' : ''}
            mt-4             
          `}
        >
          {displayedCategories.map((categoryName) => (
            <CategoryCard key={categoryName} title={categoryName} />
          ))}
        </div>
      )}
    </section>
  );
}