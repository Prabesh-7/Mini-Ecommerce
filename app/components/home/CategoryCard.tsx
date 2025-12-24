// src/components/home/CategoryCard.tsx
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
}

const categoryColors: Record<string, string> = {
  electronics: "bg-blue-50",
  accessories: "bg-purple-50",
  clothing: "bg-pink-50",
  footwear: "bg-orange-50",
  furniture: "bg-amber-50",
  health: "bg-red-50",
  outdoor: "bg-green-50",
  sports: "bg-cyan-50",
  appliances: "bg-indigo-50",
};

export default function CategoryCard({
  title,
  icon: Icon,
}: CategoryCardProps) {
  const bgColor = categoryColors[title.toLowerCase()] || "bg-gray-50";

  return (
    <li
      className={`
        flex flex-col items-center justify-center
        ${bgColor}
        rounded-2xl p-6 min-w-[140px] h-40
        hover:shadow-md transition-shadow duration-300
        cursor-pointer
      `}
    >
      <Icon size={40} className="text-gray-700 mb-3" strokeWidth={1.2} />
      <span className="text-sm font-medium text-gray-800 text-center">
        {title}
      </span>
    </li>
  );
}