"use client";

import { useEffect, useState } from "react";
import CategoryCard from "../home/CategoryCard";
import { getCategories } from "../../services/productService";
import { getIconComponent } from "../../utils/iconMapper";
import { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  icon?: string;
}

interface CategoryWithIcon extends Category {
  iconComponent: LucideIcon;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<CategoryWithIcon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        setError(null);
        const response = await getCategories();
        
        console.log("Categories API response:", response);
        
        // Handle both array response and object with data property
        let categoryList: Category[] = [];
        
        if (Array.isArray(response)) {
          // API returns simple array of strings
          categoryList = response.map((name: string) => ({
            name,
            icon: name,
          }));
        } else if (response?.data && Array.isArray(response.data)) {
          // API returns object with data property
          categoryList = response.data;
        }
        
        if (categoryList.length > 0) {
          // Map to include icon components
          const categoriesWithIcons = categoryList.map((cat: Category) => ({
            ...cat,
            iconComponent: getIconComponent(cat.icon),
          }));
          setCategories(categoriesWithIcons);
        } else {
          setCategories([]);
        }
      } catch (err: any) {
        console.error("Fetch categories error:", err);
        setError("Failed to load categories");
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <section className="container mx-auto py-12 px-4">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Categories</h2>
        <button className="text-sm px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium">
          View All Categories
        </button>
      </header>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-3 text-gray-600">Loading categories...</p>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="text-center py-12 text-red-600 font-medium">{error}</div>
      )}

      {/* Categories */}
      {!loading && !error && categories.length > 0 && (
        <ul className="flex gap-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              title={category.name}
              icon={category.iconComponent}
            />
          ))}
        </ul>
      )}

      {/* Empty state */}
      {!loading && !error && categories.length === 0 && (
        <div className="text-center py-12 text-gray-600">No categories available</div>
      )}
    </section>
  );
}
