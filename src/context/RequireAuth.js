import {useAuth} from "./AuthContext";
import {Navigate, useLocation} from "react-router-dom";

export default function RequireAuth({ children }) {
  let { currentUser } = useAuth();
  let location = useLocation();

  if (!currentUser) {
    return <Navigate to='/login' state={{ from: location}} replace />;
  }
  return children;
}