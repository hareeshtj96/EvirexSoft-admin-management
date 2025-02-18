import { Navigate } from "react-router-dom";

// Protected Route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  return token ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
