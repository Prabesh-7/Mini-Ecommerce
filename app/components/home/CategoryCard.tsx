interface CategoryCardProps {
  title: string;
  index?: number; 
}

export default function CategoryCard({ title, index = 0 }: CategoryCardProps) {
  
  const getBgColor = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("access") || lower.includes("bag")) return "bg-[#708246]/10";
    if (lower.includes("appl") || lower.includes("kitchen")) return "bg-[#6CC63F]/10";
    if (lower.includes("cloth") || lower.includes("wear")) return "bg-[#CC261B]/10";
    if (lower.includes("electro") || lower.includes("tech")) return "bg-[#F09E00]/10";
    if (lower.includes("foot") || lower.includes("shoe")) return "bg-[#B03B19]/10";
    if (lower.includes("furn") || lower.includes("home")) return "bg-[#A6644E]/10";
    return "bg-gray-50";
  };

  const bgColor = getBgColor(title);

  
  return (
    <li
      className={`
        relative
        ${bgColor}
        w-[180px]
        h-[152px]
        rounded-[30px]
        transition-all duration-300
        hover:shadow-lg hover:scale-[1.03]
        cursor-pointer
        border border-gray-100/70
        flex-shrink-0
        opacity-100
        flex flex-col items-center justify-center
      `}
    >
      
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-[80px] h-[80px] overflow-hidden rounded-2xl bg-white flex items-center justify-center">
        <img
          src="/Category.png"
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

    
      <span
        className="
          absolute bottom-4
          text-sm font-medium text-gray-800
          text-center
          px-3
          leading-tight
        "
      >
        {title}
      </span>
    </li>
  );
}