import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Movies from "./pages/Movies";
import AppLayout from "./Compoenets/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import { GetApiData } from "./api/GetApiData";


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
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
    ],
    {
      basename: "/NetflixClone", // 👈 Add this line
    }
  );



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;