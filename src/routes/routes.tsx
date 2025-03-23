import { createBrowserRouter, RouteObject } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import App from "../App";

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
    ],
  },
] as RouteObject[]); // Explicitly define the route object type
// Define the type for AllRoutes

export default router;
