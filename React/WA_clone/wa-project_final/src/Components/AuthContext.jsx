import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth, db, storage } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

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
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        // check kr rahe ho if you have logged in before
        // kuch bhi change -> yha update ho jaayega 
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const docRef = doc(db, "users", currentUser?.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const { profile_pic, email, name, status } = docSnap.data();
                    console.log("26", docSnap.data());
                    // context me jaake save kr dia hai user ka data
                    setUserData({
                        id: currentUser?.uid,
                        profile_pic: profile_pic,
                        email,
                        name,
                        status: status ? status : ""

                    });
                    updateLastSeen(currentUser);
                }
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        };
    }, [])
    const updateLastSeen = async (user) => {
        const date = new Date();
        const timeStamp = date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
        await updateDoc(doc(db, "users", user.uid), {
            lastSeen: timeStamp,
        });
    };

    const updateName = async (name) => {
        await updateDoc(doc(db, "users", userData.id), {
            name: name,
        });
        setUserData({
            ...userData,
            name: name,
        });
    };

    const updateStatus = async (status) => {
        await updateDoc(doc(db, "users", userData.id), {
            status: status,
        });
        setUserData({
            ...userData,
            status: status,
        });
    };

    const updatePhoto = async (img) => {
        const storageRef = ref(storage, `profile/${userData.id}`);
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
            "state_changed",
            () => {
                // on State Changed
                setIsUploading(true);
                setError(null);
                console.log("upload started");
            },
            () => {
                // on Error
                setError("Unable to Upload!");
                alert("Unable to Upload!");
            },
            () => {
                // on Success
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateDoc(doc(db, "users", userData.id), {
                        profile_pic: downloadURL,
                    });
                    setUserData({
                        ...userData,
                        profile_pic: downloadURL,
                    });
                    setIsUploading(false);
                    setError(null);
                });
            }
        );
    };

    const logout = () => {
        signOut(auth);
    };

    return <AuthContext.Provider value={{
        setUserData, userData, loading, logout,
        updateName,
        updateStatus,
        updatePhoto,

    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthWrapper;