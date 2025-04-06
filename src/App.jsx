import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Movies from "./pages/Movies";
import AppLayout from "./Compoenets/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import { GetApiData } from "./api/GetApiData";
import Moviedetails from "./pages/Moviedetails";
import Explore from "./pages/Explore";
import Category from "./pages/Category";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "movies",
            element: <Movies />,
            loader: GetApiData,
          },
          {
            path: "movies/:movieID",
            element: <Moviedetails />,
            loader: GetApiData,
          },
          {
            path: "explore",
            element: <Explore />,
          },
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
    ],
    {
      basename: "/NetflixClone",
    }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
