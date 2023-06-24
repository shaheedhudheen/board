import { Navigate } from "react-router-dom";
import { UserAuth } from "../utils/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
