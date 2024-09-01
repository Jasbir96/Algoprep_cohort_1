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
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setLoading(true);
            if (currentUser) {
                const docRef = doc(db, "users", currentUser?.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const { profile_pic, name, email } = docSnap.data();
                    // context me jaake save kr dia hai user ka data
                    setUserData({
                        id: currentUser.uid,
                        profile_pic,
                        email,
                        name
                    });
                    console.log("userData Added");
                }
            }
            setLoading(false);
        })
        return ()=>{
            unsubscribe()
        }
    }, [])



    console.log("userData", userData);
    return <AuthContext.Provider value={{ setUserData, userData, loading }}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper;