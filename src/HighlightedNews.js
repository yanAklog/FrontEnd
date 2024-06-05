import React from "react";


const HighlightedNews = ({ data }) => {
  
  return (
    <div className="border p-4 rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[30%]">
      <img src={data.urlToImage} alt={data.title} className="w-full h-40 object-cover rounded-md mb-4"/>
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
      <p className="text-gray-700 mb-4">{data.description}</p>
      <a href={data.url} className="text-blue-500 hover:underline">
        Read more
      </a>
    </div>
  );
};

export default HighlightedNews;

