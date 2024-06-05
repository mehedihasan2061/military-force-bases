import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Logout from "../Pages/LogOut/Logout";
import Register from "../Pages/Registration/Register";
import ErrorPage from "../layouts/ErrorPage/ErrorPage";
import Achieve from "../layouts/Achieve/Achieve";
import Military from "../Pages/Military/Military";
import PrivateRoute from "../ProtectedRoute/PrivateRoute";
import Faq from "../layouts/FAQ/Faq";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/logout",
        element: <Logout></Logout>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/achieve",
        element: (
          <PrivateRoute>
            <Achieve></Achieve>
          </PrivateRoute>
        ),
        loader: () => fetch("achieve.json"),
      },
      {
        path: "/military/:id",
        element: <Military></Military>,
        loader: ({ params }) => fetch(`achieve.json ${params.id}`),
      },
      {
        path: "/faq",
        element: (
          <PrivateRoute>
            <Faq></Faq>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;