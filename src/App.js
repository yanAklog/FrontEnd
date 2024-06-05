import { Outlet, Link } from "react-router-dom";
import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    if (loading) {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news,reuters,associated-press,the-wall-street-journal,time&apiKey=52f43c642fcd4c9e9ac59bc60d0d81de",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setNews(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        handleErrors(error.message);
      }
    }
  };


  const handleErrors = (errorCode) => {
    switch (errorCode) {
      case "401":
        toast.error("(Main) Unauthorized. The API key was missing from the request, or wasn't correct.");
        break;
      case "429":
        toast.error("(Main) Too Many Requests. You made too many requests within a window of time.");
        break;
      case "500":
        toast.error("(Main) Server Error. Something went wrong on the server (NewsAPI) side.");
        break;
      default:
        toast.error("(Main) An unknown error occurred.");
    }
  };

  
  useEffect(() => {
    loadData();
  }, []);

  
  return (
    <div className="text-center">
      <ToastContainer />
      <header className="fixed z-50 flex h-[100px] w-[100%] flex-row items-center justify-around bg-blue-800">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[50%] bg-white">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="flex flex-row gap-[20px] sm:gap-[35px] lg:gap-[50px]">
          <Link
            to={`/`}
            className="relative text-[18px] text-white no-underline outline-none transition-all hover:scale-125 sm:text-[21px] lg:text-[24px]"
          >
            Main
          </Link>
          <Link
            to={`news`}
            className="relative text-[18px] text-white no-underline outline-none transition-all hover:scale-125 sm:text-[21px] lg:text-[24px]"
          >
            News
          </Link>
          <Link
            to={`about`}
            className="relative text-[18px] text-white no-underline outline-none transition-all hover:scale-125 sm:text-[21px] lg:text-[24px]"
          >
            About
          </Link>
        </div>
      </header>
      <div className="mb-[100px] min-h-[1000px] px-[20px] pt-[120px]">
        <Outlet context={{ news, loading }} />
      </div>
      <footer className="h-[100px] w-[100%] bg-blue-gray-600"></footer>
    </div>
  );
}

export default App;
