import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import PostPages from "../Pages/PostPages/PostPages";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AddPost from "../Pages/Dashboard/AddPost/AddPost";
import MyPost from "../Pages/Dashboard/MyPost/MyPost";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminAnnounce from "../Pages/Dashboard/AdminAnnounce/AdminAnnounce";
import UserHome from "../Layout/Dashboard/UserHome/UserHome";
import AdminHome from "../Layout/Dashboard/AdminHome/AdminHome";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute/AdminPrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/posts/:id",
        element: <PostPages></PostPages>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allPosts/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // user access route
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "addPost",
        element: <AddPost></AddPost>,
      },
      {
        path: "myPost",
        element: <MyPost></MyPost>,
      },
      // admin access routes
      {
        path: "adminHome",
        element: (
          <AdminPrivateRoute>
            <AdminHome></AdminHome>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminPrivateRoute>
            <ManageUsers></ManageUsers>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "makeAnnounce",
        element: (
          <AdminPrivateRoute>
            <AdminAnnounce></AdminAnnounce>
          </AdminPrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
