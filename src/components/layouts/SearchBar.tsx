import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex-1 flex justify-center">
      <input
        type="text"
        placeholder="Search anything..."
        className="w-full max-w-lg px-4 py-2 rounded-full bg-white dark:bg-gray-500 border border-transparent focus:border-brand-primary focus:ring-2 focus:ring-brand-primary outline-none transition"
      />
    </div>
  );
};

export default SearchBar;
