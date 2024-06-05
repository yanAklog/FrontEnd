import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const SingleNews = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <div className="flex w-[100%] flex-col justify-center px-[20px] pt-[50px]">
      <div className="mb-[50px] flex items-center justify-between">
        <button
          className=" rounded-[25px] bg-blue-800 p-[10px] text-white"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </button>
        <div className="flex flex-row gap-[20px]">
          <label className="font-bold">{location.state.data.author}</label>
          <label>{location.state.data.publishedAt}</label>
        </div>
      </div>
      <div className="flex flex-col gap-[50px]">
        <h1 className="text-[25px] sm:text-[30px]">
          {location.state.data.title}
        </h1>
        <article className="text-[20px]">
          {location.state.data.description
            ? location.state.data.description
            : "No despcription for this topic"}
        </article>
      </div>
    </div>
  );
};

export default SingleNews;
