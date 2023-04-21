import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import { Events, Home, Sounds, Visuals, Words } from "./pages";

const Router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "events",
        element: <Events />,
        handle: "Events",
      },
      {
        path: "sounds",
        element: <Sounds />,
        handle: "Sounds",
      },
      {
        path: "visuals",
        element: <Visuals />,
        handle: "Visuals",
      },
      {
        path: "words",
        element: <Words />,
        handle: "Words",
      },
    ],
  },
]);

export default Router;
