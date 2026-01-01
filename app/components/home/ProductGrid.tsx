// "use client";

// import { useEffect, useState } from "react";
// import { Search } from "lucide-react";
// import { getProducts } from "../../services/productService";
// import ProductCard from "./ProductCard";
// import Pagination from "./Pagination";
// import { Product } from "../../types/product";

// export default function ProductGrid() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1);
//   const [error, setError] = useState<string | null>(null);

//   const PRODUCTS_PER_PAGE = 4;

//   useEffect(() => {
//     async function fetchProducts() {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await getProducts({
//           page,
//           limit: PRODUCTS_PER_PAGE,
//         });

//         if (response?.data && Array.isArray(response.data)) {
//           setProducts(response.data);

//           if (response.pagination?.total) {
//             const total = response.pagination.total;
//             setTotalPages(Math.ceil(total / PRODUCTS_PER_PAGE));
//           }
//         } else {
//           setProducts([]);
//           setTotalPages(1);
//         }
//       } catch (err) {
//         console.error("Error loading products:", err);
//         setError("Failed to load products");
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, [page]);

//   return (
//     <section className="py-16 px-5 md:px-8 lg:px-12 max-w-7xl mx-auto">
//       {/* Title */}
//       <h1 className="font-inter text-4xl md:text-5xl font-semibold text-center mb-12 text-gray-900">
//         Our Products
//       </h1>

//       <div className="flex justify-center mb-12">
//         <div
//           className="
//             w-full max-w-[450px] 
//             h-[60px] 
//             bg-white 
//             rounded-[10px] 
//             border border-gray-200 
//             shadow-sm 
//             flex items-center 
//             px-4 
//             gap-3
//           "
//         >
//           <input
//             type="text"
//             placeholder="Search ..."
//             className="
//               flex-1 
//               bg-transparent 
//               outline-none 
//               text-gray-700 
//               placeholder-gray-400 
//               text-base
//             "
//           />
//           <button
//             className="
//               w-10 h-10 
//               bg-[#1CD8D2] 
//               rounded-full 
//               flex items-center justify-center 
//               text-white 
//               shrink-0
//               hover:bg-[#19b5b0] 
//               transition-colors
//             "
//             aria-label="Search products"
//           >
//             <Search size={20} strokeWidth={2.5} />
//           </button>
//         </div>
//       </div>

   
//       {loading && (
//         <div className="text-center py-20">
//           <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-800 border-t-transparent"></div>
//           <p className="mt-4 text-gray-600">Loading products...</p>
//         </div>
//       )}

    
//       {error && !loading && (
//         <div className="text-center py-20 text-red-600 font-medium">{error}</div>
//       )}

//       {/* No products */}
//       {!loading && !error && products.length === 0 && (
//         <div className="text-center py-20 text-gray-600">No products available</div>
//       )}

//       {/* Products grid */}
//       {!loading && products.length > 0 && (
//         <>
//           <div
            
//           >
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>

          

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="mt-16 flex justify-center">
//               <Pagination
//                 currentPage={page}
//                 totalPages={totalPages}
//                 onPageChange={setPage}
//               />
//             </div>
//           )}
//         </>
//       )}
//     </section>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { getProducts } from "../../services/productService";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { Product } from "../../types/product";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const PRODUCTS_PER_PAGE = 4;

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      setError(null);

      try {
        const response = await getProducts({
          page,
          limit: PRODUCTS_PER_PAGE,
        });

        if (response?.data && Array.isArray(response.data)) {
          setProducts(response.data);

          if (response.pagination?.total) {
            const total = response.pagination.total;
            setTotalPages(Math.ceil(total / PRODUCTS_PER_PAGE));
          }
        } else {
          setProducts([]);
          setTotalPages(1);
        }
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Failed to load products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [page]);

  return (
    <section className="py-16 px-5 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <h1 className="font-inter text-4xl md:text-5xl font-semibold text-center mb-12 text-gray-900">
        Our Products
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-12">
        <div
          className="
            w-full max-w-lg
            h-14
            bg-white 
            rounded-xl 
            border border-gray-200 
            shadow-sm 
            flex items-center 
            px-5 
            gap-3
          "
        >
          <input
            type="text"
            placeholder="Search products..."
            className="
              flex-1 
              bg-transparent 
              outline-none 
              text-gray-700 
              placeholder-gray-400 
              text-base
            "
          />
          <button
            className="
              w-11 h-11 
              bg-[#1CD8D2] 
              rounded-full 
              flex items-center justify-center 
              text-white 
              shrink-0
              hover:bg-[#19b5b0] 
              transition-colors
            "
            aria-label="Search products"
          >
            <Search size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gray-800 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="text-center py-20 text-red-600 font-medium">{error}</div>
      )}

      {/* No products */}
      {!loading && !error && products.length === 0 && (
        <div className="text-center py-20 text-gray-600">No products available</div>
      )}

      {/* Products grid */}
      {!loading && products.length > 0 && (
        <>
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-4 
              gap-6 md:gap-8
            "
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-1 flex justify-center">
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