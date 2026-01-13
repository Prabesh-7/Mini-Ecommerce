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
  const hasMore = categories.length > initialVisibleCount;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header with View All button */}
        <div className="relative mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Categories
          </h2>

          {hasMore && (
            <button
              onClick={() => setShowAll(!showAll)}
              className={`
                rounded-2xl border border-gray-200 bg-[#E7FAFE] px-6 py-3
                font-inter text-base font-medium text-black
                shadow-sm transition-all duration-200
                hover:bg-[#d5f4fb] hover:shadow-md
                active:scale-98
                sm:px-8 sm:py-3.5
              `}
            >
              {showAll ? "Show Less" : "View All Categories"}
            </button>
          )}
        </div>

        {/* Categories grid */}
        {categories.length === 0 ? (
          <div className="py-16 text-center text-gray-500">
            <p className="text-lg">Loading categories...</p>
          </div>
        ) : (
          <div
            className={`
              grid grid-cols-2 gap-5 sm:gap-6
              md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
              ${showAll ? "gap-y-8 md:gap-y-10" : "gap-y-6"}
            `}
          >
            {displayedCategories.map((categoryName) => (
              <CategoryCard key={categoryName} title={categoryName} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}