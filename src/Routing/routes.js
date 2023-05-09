import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Contacts from "../Components/Contacts";
import ChartsMaps from "../Components/ChartsMaps";
import CreateContact from "../Components/CreateContact";
import EditContact from "../Components/EditContact";

const Layout = () => {
  // defining the layout of the application
  return (
    <>
      <div className="fixed-navbar">
        <Navbar />
      </div>
      <div className="scrollable-content">
        <Sidebar />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // creating routes
      {
        path: "/",
        element: <Contacts />,
      },
      {
        path: "/cm",
        element: <ChartsMaps />,
      },
      {
        path: "/create",
        element: <CreateContact />,
      },
    ],
  },
]);

const BaseRoutes = () => {
  // providing the routes defined to RouterProvider
  return <RouterProvider router={routes} />;
};

export default BaseRoutes;
