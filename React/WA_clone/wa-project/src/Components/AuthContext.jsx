import { onAuthStateChanged } from "firebase/auth";
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
    useEffect(() => {
        // check kr rahe ho if you have logged in before
        // kuch bhi change -> yha update ho jaayega 
        onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const docRef = doc(db, "users", currentUser?.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const { uid, photoURL, displayName, email } = docSnap.data();
                    // context me jaake save kr dia hai user ka data
                    setUserData({
                        id: uid,
                        profile_pic: photoURL,
                        email,
                        name: displayName
                    });
                    console.log("userData Added");
                }
            }
        })
    }, [])

    console.log("userData", userData);
    return <AuthContext.Provider value={{ setUserData, userData }}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper;