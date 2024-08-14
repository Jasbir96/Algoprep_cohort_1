import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
    const isLoggedIn = props.isLoggedIn;
    const children = props.children;
    if (isLoggedIn) {
        return children
    } else {
        return <Navigate to="/login"></Navigate>
    }
}
export default ProtectedRoute