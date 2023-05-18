import { useState } from "react";
import Image from "next/image";
function DropdownCategory() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center w-[18rem] h-[6rem] bg-[#687684] font-bold text-white rounded-full mb-2 mr-2 relative"
        onClick={toggleMenu}
      >
        <span className="flex items-center">
          <Image
            src="/EllipseCate.png"
            alt="Imagen"
            className="w-[62px] h-[62px] mr-4 ml-[1rem]"
            width={60}
            height={60}
          />
        </span>
        Category
        <span className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="absolute left-0 w-[18rem] bg-white shadow rounded-md mt-2">
          <ul className="py-2 px-4">
            <li className="text-gray-600 py-1">Programming</li>
            <li className="text-gray-600 py-1">UX/UI</li>
            <li className="text-gray-600 py-1">DevOps</li>
            <li className="text-gray-600 py-1">Business</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownCategory;
