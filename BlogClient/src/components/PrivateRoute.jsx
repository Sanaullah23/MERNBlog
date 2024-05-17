import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";


const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(currentUser !== null);
  }, [currentUser]);

  if (isAuthenticated === null) {
    return null;
  }
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
