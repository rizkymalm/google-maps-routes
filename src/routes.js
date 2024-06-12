import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListJourney from "./pages/ListJourney";
import TrackingPage from "./pages/TrackingPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/user/list-journey/:user",
      element: <ListJourney />,
    },
    {
      path: "/user/journey/:journey",
      element: <ListJourney />,
    },
    {
      path: "/user/tracking/:journey",
      element: <TrackingPage />,
    },
  ]);
}
