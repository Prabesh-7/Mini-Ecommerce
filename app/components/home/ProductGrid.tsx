"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { getProducts } from "../../services/productService";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { Product } from "../../types/product";

export default function ProductGrid() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const PRODUCTS_PER_PAGE = 4;

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);

      try {
        const response = await getProducts();

        if (response?.data && Array.isArray(response.data)) {
          setAllProducts(response.data);
        } else {
          setAllProducts([]);
        }
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return allProducts;

    const term = searchTerm.toLowerCase().trim();
    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
  }, [searchTerm, allProducts]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 sm:mb-12 sm:text-4xl md:text-5xl">
          Our Products
        </h1>

        {/* Search bar */}
        <div className="mx-auto mb-12 max-w-lg md:max-w-xl lg:max-w-2xl">
          <div className="relative flex h-12 items-center rounded-xl border border-gray-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#1CD8D2]/30 sm:h-14">
            <input
              type="text"
              placeholder="Search products..."
              className="h-full flex-1 bg-transparent px-5 text-base text-gray-700 placeholder-gray-400 outline-none"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#1CD8D2] text-white transition-colors hover:bg-[#19b5b0] sm:right-2.5 sm:h-11 sm:w-11"
              aria-label="Search products"
            >
              <Search size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[40vh] flex-col items-center justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-[#1CD8D2]"></div>
            <p className="mt-6 text-lg text-gray-600">Loading products...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="rounded-lg bg-red-50 p-8 text-center text-lg font-medium text-red-700">
            {error}
          </div>
        )}

        {/* No results */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="rounded-lg bg-gray-50 p-12 text-center text-lg text-gray-600">
            No products found matching "{searchTerm}"
          </div>
        )}

        {/* Products + Pagination */}
        {!loading && paginatedProducts.length > 0 && (
          <>
            <div
              className="
                grid grid-cols-1 gap-6 
                sm:grid-cols-2 
                md:gap-7 
                lg:grid-cols-3 lg:gap-8 
                xl:grid-cols-4
              "
            >
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center sm:mt-16">
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}