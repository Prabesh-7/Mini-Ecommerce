"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { Product } from "../../types/product";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState(""); // Current input value
  const [activeSearch, setActiveSearch] = useState(""); // Submitted search term
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const ITEMS_PER_PAGE = 4;

  // Fetch products when page or activeSearch changes
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);

      try {
        const response = await getProducts({
          page,
          limit: ITEMS_PER_PAGE,
          search: activeSearch || undefined,
        });

        if (response?.data && Array.isArray(response.data)) {
          setProducts(response.data);

          if (response.pagination?.total) {
            const total = response.pagination.total;
            setTotalPages(Math.ceil(total / ITEMS_PER_PAGE));
          }
        } else {
          setProducts([]);
          setTotalPages(1);
        }
      } catch (err: any) {
        console.error("Fetch error:", err);
        setError("Failed to load products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [page, activeSearch]);

  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1); // Reset to page 1
    setActiveSearch(searchInput); // Submit the search
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchInput("");
    setPage(1);
    setActiveSearch("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">
          Our Products
        </h1>
        <p className="text-center text-gray-600">
          Discover the latest smartphones and accessories
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
        <div className="relative flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search smartphones, accessories..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="
                w-full px-5 py-4 pl-12 rounded-full border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                focus:border-transparent shadow-sm transition-all
              "
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Clear button */}
            {searchInput && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {/* Search button */}
          <button
            type="submit"
            className="px-6 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-medium"
          >
            Search
          </button>
        </div>
      </form>

      {/* States */}
      {loading && !products.length && (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      )}

      {error && !loading && (
        <div className="text-center py-20 text-red-600 font-medium">{error}</div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="text-center py-20 text-gray-600">
          {activeSearch
            ? `No products found for "${activeSearch}"`
            : "No products available"}
        </div>
      )}

      {/* Products */}
      {!loading && products.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}