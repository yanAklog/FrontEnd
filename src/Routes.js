import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import News from "./News";
import Main from "./Main";
import About from "./About";
import SingleNews from "./SingleNews";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "news",
        element: <News />,
      },
      { path: "news/:newsId", element: <SingleNews /> },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
