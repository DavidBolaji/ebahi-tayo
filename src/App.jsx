import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import RootPage from "./pages/RootPage";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BookPage from "./pages/BookPage";
import CoursePage from "./pages/CoursePage";
import ChallengePage from "./pages/ChallengePage";
import React from "react";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/book",
        element: <BookPage />,
      },
      {
        path: "/course",
        element: <CoursePage />,
      },
      {
        path: "/challenge",
        element: <ChallengePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
