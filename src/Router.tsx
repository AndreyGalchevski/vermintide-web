import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Suspenseful from "./components/Suspenseful";

const Home = lazy(() => import("./pages/home"));
const Events = lazy(() => import("./pages/events"));
const Sounds = lazy(() => import("./pages/sounds"));
const Visuals = lazy(() => import("./pages/visuals"));
const Words = lazy(() => import("./pages/words"));

const Router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <Suspenseful>
            <Home />
          </Suspenseful>
        ),
      },
      {
        path: "events",
        element: (
          <Suspenseful>
            <Events />
          </Suspenseful>
        ),
        handle: "Events",
      },
      {
        path: "sounds",
        element: (
          <Suspenseful>
            <Sounds />
          </Suspenseful>
        ),
        handle: "Sounds",
      },
      {
        path: "visuals",
        element: (
          <Suspenseful>
            <Visuals />
          </Suspenseful>
        ),
        handle: "Visuals",
      },
      {
        path: "words",
        element: (
          <Suspenseful>
            <Words />
          </Suspenseful>
        ),
        handle: "Words",
      },
    ],
  },
]);

export default Router;
