import { Navigate } from "react-router-dom";
import cookies from "js-cookie";

// Properties
import properties from "../../properties.json";

const ProtectedRoute = (props) => {
  const token = cookies.get(properties.storage.cookie_name);

  return token ? props.children : <Navigate to="/login" />;
};

export default ProtectedRoute;
