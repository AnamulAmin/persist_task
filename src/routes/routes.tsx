import { createBrowserRouter, RouteObject } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import App from "../App";
import ChallengesDash from "../Dashboard/DashboardComponents/ChallengesDash/ChallengesDash";
import ChallengersDash from "../Dashboard/DashboardComponents/ChallengersDash/ChallengersDash";
import MentorNetwork from "../Dashboard/DashboardComponents/MentorNetwork/MentorNetwork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      // Add more routes for the dashboard as needed
      {
        path: "challenges",
        element: <ChallengesDash />,
      },
      {
        path: "challengers",
        element: <ChallengersDash />,
      },
      {
        path: "mentor-network",
        element: <MentorNetwork />,
      },
    ],
  },
] as RouteObject[]); // Explicitly define the route object type
// Define the type for AllRoutes

export default router;
