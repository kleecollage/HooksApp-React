import { AboutPage } from "@/09-useContext/pages/about/AboutPage";
import { LoginPage } from "@/09-useContext/pages/auth/LoginPage";
import { ProfilePage } from "@/09-useContext/pages/profile/ProfilePage";
import { PrivateRoute } from "@/09-useContext/router/PrivateRoute";
import { createBrowserRouter, Navigate } from "react-router";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />
  },

  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage />} />
  },
  {
    path: "*",
    element: <Navigate to={'/'} />
  },
]);
