import { Product } from "../../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="px-5 pb-6 pt-4">
        <h3 className="font-medium text-gray-900 text-base line-clamp-2 mb-2 min-h-10">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4 min-h-11">
          {product.description || "Latest smartphone with advanced features..."}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <span className="text-xs px-3 py-1 bg-teal-50 text-teal-700 rounded-full font-medium">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}