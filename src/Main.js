import React from "react";
import HighlightedNews from "./HighlightedNews";
import { Link } from "react-router-dom";
import newsPic from "./news_picture.png";
import { useOutletContext } from "react-router-dom";


const Main = () => {
  const { loading, news } = useOutletContext();
  
  return (
    <div className="">
      <div className="flex flex-row flex-wrap gap-[10px] sm:gap-[20px] lg:gap-[25px]">
        <div className="w-[100%]">
          <h1 className="text-[30px]">Hot news from our partners</h1>
          <label className="text-[20px]">
            Always relevant and important information
          </label>
        </div>
        <div className="flex w-[100%] items-center justify-center">
          <img src={newsPic} className="w-[100%] sm:w-[40%] lg:w-[25%]"></img>
        </div>
        {loading && (
          <div className="flex w-[100%] items-center justify-center">
            Loading data...
          </div>
        )}
        {news.articles &&
          news.articles.slice(0, 9).map((el, index) => (
            <HighlightedNews data={el} key={index} />
          ))}
        <div className="flex w-[100%] flex-col items-center justify-center">
          <h1 className="text-[30px]">More news on our specified page</h1>
          <Link
            className="mt-[35px] w-[200px] rounded-[20px] bg-blue-800 py-[15px] text-[20px] text-white transition-all hover:scale-105"
            to={"news"}
          >
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

