import { Product } from "../../types/product";
import { Tag } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (


    
    <div className="
      group 
      flex h-full flex-col 
      overflow-hidden rounded-2xl 
      bg-white 
      border border-gray-200 
      shadow-sm 
      transition-all duration-300 
      hover:shadow-lg hover:shadow-black/5 
      active:scale-[0.98]
    ">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full  bg-gray-50 sm:aspect-[5/4]">
        <img
          src="ProductI.jpg"
          alt={product.title}
          loading="lazy"
          className="
            h-full w-full object-cover 
            transition-transform duration-500 
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="
          line-clamp-2 
          font-inter text-base font-semibold 
          leading-tight tracking-tight 
          text-gray-900 
          group-hover:text-[#1CD8D2] 
          sm:text-lg
        ">
          {product.title}
        </h3>

        <p className="
          line-clamp-3 
          min-h-[3.5rem] 
          font-inter text-sm 
          leading-relaxed 
          text-gray-600
        ">
          {product.description || "Latest smartphone with advanced features..."}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-center gap-2.5">
            <div className="
              flex h-7 w-7 items-center justify-center 
              rounded-full bg-black 
              text-sm font-semibold text-white
            ">
              $
            </div>
            <span className="text-xl font-bold text-gray-900">
              {product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-600">
            <Tag size={16} className="text-gray-500" />
            <span className="line-clamp-1">{product.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}