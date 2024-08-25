import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

// 1. 
const AuthContext = React.createContext();
// hook
export function useAuth() {
    // 3
    return useContext(AuthContext);
}

function AuthWrapper({ children }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // check kr rahe ho if you have logged in before
        // kuch bhi change -> yha update ho jaayega 
        onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const docRef = doc(db, "users", currentUser?.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const {profile_pic, email,name } = docSnap.data();
                    console.log("26", docSnap.data());
                    // context me jaake save kr dia hai user ka data
                    setUserData({
                        id: currentUser?.uid,
                        profile_pic: profile_pic,
                        email,
                        name
                    });
                }
            }
            setLoading(false);
        })
    }, [])
    const logout =  () => {
        signOut(auth);
    };

    console.log("userData authcontext", userData);
    return <AuthContext.Provider value={{
        setUserData, userData, loading,logout}}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper;