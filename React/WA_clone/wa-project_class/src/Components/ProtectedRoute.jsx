import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Loader2Icon } from "lucide-react";

function ProtectedRoute(props) {
    const { userData, loading } = useAuth();
   
    if (loading) {
        return <div className="w-screen h-screen flex items-center justify-center bg-background">
            <Loader2Icon  className="w-8 h-8 animate-spin"/>
        </div>
    }
    const children = props.children;
    if (userData) {
        return children
    } else {
        return <Navigate to="/login"></Navigate>
    }
}
export default ProtectedRoute