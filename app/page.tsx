// src/app/page.tsx
import Hero from "../app/components/home/Hero";
import CategoryList from "../app/components/home/CategoryList";
import ProductGrid from "../app/components/home/ProductGrid";
import Subscribe from "../app/components/home/Subscribe";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <CategoryList />
      <ProductGrid />
      <Subscribe />
    </div>
  );
}
