import React, { useContext, useState } from "react";
// 1. 
const AuthContext = React.createContext();
// hook
export function useAuth() {
    // 3
    return useContext(AuthContext);
}

function AuthWrapper({ children }) {
    
    const [userData, setUserData] = useState(null);

    return <AuthContext.Provider value={{ setUserData, userData }}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper;