import { AboutPage } from "@/09-useContext/pages/about/AboutPage";
import { LoginPage } from "@/09-useContext/pages/auth/LoginPage";
import { ProfilePage } from "@/09-useContext/pages/profile/ProfilePage";
import { createBrowserRouter, Navigate } from "react-router";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "*",
    element: <Navigate to={'/'} />
  },
]);