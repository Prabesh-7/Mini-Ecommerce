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
    <div
      className={`
        group relative
        flex h-full flex-col items-center justify-center
        ${bgColor}
        rounded-3xl
        border border-gray-100/70
        shadow-sm
        transition-all duration-300
        hover:shadow-md hover:scale-[1.03]
        active:scale-[0.98]
        cursor-pointer
        overflow-hidden
      `}
    >
      {/* Icon / Image container */}
      <div className="
        mt-3 mb-6 
        h-20 w-20 
        overflow-hidden rounded-2xl 
        bg-white 
        shadow-sm 
        flex items-center justify-center
        transition-transform duration-400
        group-hover:scale-110
      ">
        <img
          src="Category.png"
          alt={title}
          className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          loading="lazy"
        />
      </div>

      {/* Category name */}
      <span
        className="
          px-4 pb-6
          text-center text-sm font-medium 
          leading-tight tracking-tight 
          text-gray-800
          sm:text-base
        "
      >
        {title}
      </span>
    </div>
  );
}