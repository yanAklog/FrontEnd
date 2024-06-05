import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import SingleNewsFromNewsPage from "./SingleNewsFromNewsPage";
import NewsFilters from "./NewsFilters";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const News = () => {
  const { news, loading } = useOutletContext();
  const [count, setCount] = useState(10);
  const [text, setText] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [queryParams, setQueryParams] = useState({
    query: "",
    pageSize: 10,
    page: 1,
    apiKey: "52f43c642fcd4c9e9ac59bc60d0d81de",
  });


  useEffect(() => {
    loadData();
  }, [queryParams]);


  const loadData = async () => {
    const { query, pageSize, page, apiKey } = queryParams;
    const url =
      query !== ""
        ? `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`
        : `https://newsapi.org/v2/everything?sources=bbcnews,reuters,associated-press,the-wall-street-journal,cnn,time,bbc-sport&language=en&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        handleErrors(response.status);
        return;
      }
      const data = await response.json();
      if (data.articles.length === 0) {
        toast.error("No news found for the given filter. Please try another one.");
      }
      if (page === 1) {
        setFilteredNews(data.articles);
      } else {
        setFilteredNews((prevNews) => [...prevNews, ...data.articles]);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };


  const handleErrors = (status) => {
    switch (status) {
      case 401:
        toast.error("(News) Unauthorized. The API key was missing from the request, or wasn't correct.");
        break;
      case 429:
        toast.error("(News) Too Many Requests. You made too many requests within a window of time.");
        break;
      case 500:
        toast.error("(News) Server Error. Something went wrong on the server (NewsAPI) side.");
        break;
      default:
        toast.error("(News) An unknown error occurred.");
    }
  };


  const filterNews = (text) => {
    setText(text);
    setQueryParams((prevParams) => ({
      ...prevParams,
      query: text,
      page: 1, // Reset page number when applying new filter
    }));
  };

  const loadMore = () => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      page: prevParams.page + 1,
    }));
  };

  
  return (
    <div>
      <div className="w-[100%] text-center">
        <h1 className="text-[30px]">All our news in one place</h1>
        <label className="text-[20px]">Filter, search and find what you need</label>
      </div>
      <NewsFilters setFilter={filterNews} currentQuery={queryParams.query} />
      <div className="mt-[50px] grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3">
        {filteredNews &&
          filteredNews.map((el, index) => (
            <SingleNewsFromNewsPage data={el} key={index} />
          ))}
      </div>
      <div className="text-center">
        <button
          className="mt-[35px] w-[200px] rounded-[20px] bg-blue-800 py-[15px] text-[20px] text-white transition-all hover:scale-105"
          onClick={loadMore}
        >
          Load more
        </button>
      </div>
    
    </div>
  );
};

export default News;











