// "use client";
// import { IoFilter } from "react-icons/io5";

// const BlogFilter = () => {
//   return (
//     <div className="w-[121px] h-[44px] border-[1px] border-[#00000066] rounded-[5px] p-2">
//       <div className="flex items-center justify-between">
//         <p className="text-[#00000066]">Filter</p>
//         <IoFilter color="#00000066" />
//       </div>
//     </div>
//   );
// };

// export default BlogFilter;

// app/components/blog/BlogFilter.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { IoFilter, IoClose } from "react-icons/io5";
import { Category } from "@/Types";


interface BlogFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (categoryId: string | null) => void;
}

const BlogFilter = ({ categories, selectedCategory, setSelectedCategory }: BlogFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedCategoryName = categories.find(cat => cat._id === selectedCategory)?.title;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[121px] h-[44px] border-[1px] border-[#00000066] rounded-[5px] p-2 bg-white hover:border-[#E28101] transition-colors cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <p className="text-[#00000066] text-sm truncate">
            {selectedCategoryName || "Filter"}
          </p>
          {selectedCategory ? (
            <IoClose 
              color="#E28101" 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCategory(null);
              }}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          ) : (
            <IoFilter color="#00000066" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-[48px] right-0 w-[200px] bg-white border border-[#00000026] rounded-[5px] shadow-lg z-50 max-h-[300px] overflow-y-auto">
          <div className="py-2">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                !selectedCategory ? "bg-[#E2810110] text-[#E28101]" : "text-gray-700"
              }`}
            >
              All Categories
            </button>
            
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => {
                  setSelectedCategory(category._id);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                  selectedCategory === category._id 
                    ? "bg-[#E2810110] text-[#E28101]" 
                    : "text-gray-700"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogFilter;