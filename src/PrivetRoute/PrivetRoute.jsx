import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    
    const {user, loading} = useContext(AuthContext)

    if (loading) {
        return <h1 className="text-5xl font-bold flex h-screen"> Loading......</h1>
    }

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }

    return children
};

export default PrivetRoute;