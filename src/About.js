import React from "react";

const About = () => {
  
  return (
    <div className="w-[100%] px-4">
      <h1 className="text-[30px] mb-4">
        Website developed for the 6th term front-end course
      </h1>
      <label className="text-[20px] block mb-2">Student: Yan Aklog</label>
      

      <div className="mt-6">
        <h2 className="text-[24px] mb-2">Functionality</h2>
        <ul className="list-disc list-inside text-left text-[20px] ml-6">
          <li>the website lets users find various articles, which are published on the net;</li>
          <li>It uses 
            <a href="https://newsapi.org/" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">NewsAPI </a>
            to get worldwide news and their main attributes;
          </li>
          <li>full texts of the articles can be accessed via the provided links;</li>
        </ul>
      </div>


      <div className="mt-6">
        <h2 className="text-[24px] mb-2">Structure</h2>
        <ul className="list-disc list-inside text-left text-[20px] ml-6">
          <li>'Main' page displays top and breaking headlines from different big news sources;</li>
          <li>'News' page diplays all kinds of news and has filtering functionality;
            <ul className="list-disc list-inside text-left text-[20px] ml-6">
              <li>filter is keywords or phrases to search for in the article title and body;</li>
              <li>this allows to include combinations of words and different languages in the filter;</li>
            </ul>
          </li>
        </ul>
      </div>


      <div className="mt-6">
        <h2 className="text-[24px] mb-2">API plan limitation</h2>
        <ul className="list-disc list-inside text-left text-[20px] ml-6">
          <li><b>100 requests per day available</b></li>  
        </ul>
      </div>
    </div>
  );
};

export default About;




