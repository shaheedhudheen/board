import Chart from "./components/Chart";
import SignIn from "./components/SignIn";
import SignUp from "./components/signUp";
import Dashboard from "./pages/Dashboard";
import SignInPage from "./pages/SignInPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./utils/AuthContext";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/account",

    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
