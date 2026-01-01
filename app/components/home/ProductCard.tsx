import { Product } from "../../types/product";
import { Tag } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group w-[290px] overflow-hidden rounded-2xl bg-white ">
      {/* Add rounded-b-2xl here so bottom of image is rounded */}
      <div className="aspect-[290/200] overflow-hidden rounded-b-2xl">
        <img
          src="ProductI.jpg"
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h3 className="line-clamp-2 font-inter text-lg font-semibold leading-6 tracking-tight text-gray-900">
          {product.title}
        </h3>

        <p className="line-clamp-3 min-h-[3.75rem] font-inter text-sm font-medium leading-tight tracking-tight text-black">
          {product.description || "Latest smartphone with advanced features..."}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3 ">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm font-medium text-white">
              $
            </div>
            <span className="font-medium text-gray-900">
              {product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <Tag size={16} />
            {product.category}
          </div>
        </div>
      </div>
    </div>
  );
}