import React, { useState } from "react";


const NewsFilters = ({ setFilter, currentQuery }) => {
  const [value, setValue] = useState(currentQuery);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    setFilter(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  
  return (
    <div className="mt-[50px]">
      <input
        placeholder="Filter by keywords"
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="h-[50px] w-[100%] rounded-[10px] bg-blue-gray-100 p-[5px] placeholder:text-white"
      />
      <button
        onClick={handleSearch}
        className="mt-[10px] h-[40px] w-[100%] rounded-[10px] bg-blue-800 text-white transition-all hover:scale-105"
      >
        Search
      </button>
    </div>
  );
};

export default NewsFilters;


