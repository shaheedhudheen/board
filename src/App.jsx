import LoginCard from "./components/LoginCard";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/test",
    element: <LoginCard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
