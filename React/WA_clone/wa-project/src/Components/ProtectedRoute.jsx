import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute(props) {
    const { userData } = useAuth();
    console.log("user Data",userData)
    const children = props.children;
    if (userData) {
        return children
    } else {
        return <Navigate to="/login"></Navigate>
    }
}
export default ProtectedRoute