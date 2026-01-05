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
        const response = await getProducts({
          page: 1,
          limit: 1000, 
        });

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

    const term = searchTerm.toLowerCase();

    return allProducts.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
  }, [searchTerm, allProducts]);

 
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(
      startIndex,
      startIndex + PRODUCTS_PER_PAGE
    );
  }, [filteredProducts, page]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1); 
  };

  return (
    <section className="py-16 px-5 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <h1 className="font-inter text-4xl md:text-5xl font-semibold text-center mb-12 text-gray-900">
        Our Products
      </h1>

      <div className="flex justify-center mb-12">
        <div className="w-full max-w-lg h-14 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center px-5 gap-3">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            className="w-11 h-11 bg-[#1CD8D2] rounded-full flex items-center justify-center text-white shrink-0 hover:bg-[#19b5b0] transition-colors"
            aria-label="Search products"
          >
            <Search size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-800 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="text-center py-20 text-red-600 font-medium">
          {error}
        </div>
      )}

      {/* No results */}
      {!loading && !error && filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-600">
          No products found
        </div>
      )}

      {/* Products grid */}
      {!loading && paginatedProducts.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </>
      )}
    </section>
  );
}
