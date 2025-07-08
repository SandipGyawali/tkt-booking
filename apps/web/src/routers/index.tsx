import MovieList from "@/pages/Movies/MovieList";
import GenesisPage from "@/pages/Settings/genesis";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage"));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const SettingsPage = lazy(() => import("@/pages/Settings/SettingsPage"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/genesis",
    element: <GenesisPage />,
  },
  {
    path: "/app/movies",
    element: <MovieList />,
  },
]);

export default function ApplicationRoutes() {
  return <RouterProvider router={routes} />;
}
