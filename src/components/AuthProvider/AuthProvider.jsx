import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.init';

export const AuthContext = createContext()
const AuthProvider = ({routes}) => {
    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)

    const handleRegister = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogOut = ()=>{
        signOut(auth)
    }

    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
    }

    const manageProfile = (name, image) =>{
        updateProfile(auth.currentUser,{
            displayName:name,photoURL:image
        })
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogOut,
        handleGoogleLogin,
        manageProfile
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            return () =>{
                unsubscribe()
            }
        })
    },[])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    routes
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;