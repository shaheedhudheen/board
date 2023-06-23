import Chart from "./components/Chart";
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
    element: <Chart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
