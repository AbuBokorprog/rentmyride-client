import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllBikes from "../pages/bikes/AllBikes";
import BikeDetails from "../pages/bikes/BikeDetails";
import CategoriesBikes from "../pages/bikes/CategoriesBikes";
import About from "../pages/About";
import Playground from "../pages/Playground";
import Dashboard from "../layout/dashboard/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import UserDashboard from "../pages/user/UserDashboard";
import AllBikesManage from "../pages/admin/bike-management/AllBikesManage";
import CreateBike from "../pages/admin/bike-management/CreateBike";
import RentalBikes from "../pages/admin/rental-management/RentalBikes";
import AllUser from "../pages/admin/user-management/AllUser";
import MyRentals from "../pages/user/rental-management/MyRentals";
import ProtectedRoute from "../providers/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bikes",
        element: <AllBikes />,
      },
      {
        path: "/bikes/:slug",
        element: <BikeDetails />,
      },
      {
        path: "/bikes/category/:slug",
        element: <CategoriesBikes />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: (
      <ProtectedRoute role={["admin", "super-admin"]}>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "admin",
        element: <AdminDashboard />,
      },
      {
        path: "admin/all-users",
        element: <AllUser />,
      },
      {
        path: "admin/all-bikes",
        element: <AllBikesManage />,
      },
      {
        path: "admin/create-bike",
        element: <CreateBike />,
      },
      {
        path: "admin/rental-bikes",
        element: <RentalBikes />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: (
      <ProtectedRoute role={["user"]}>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "user",
        element: <UserDashboard />,
      },
      {
        path: "user/my-rentals",
        element: <MyRentals />,
      },
    ],
  },
]);
