import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
 



export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // signIn With Email Password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



        // google Login
        const singWithGoogle = () => {
            return signInWithPopup(auth, googleProvider)
        }


    // logOut

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



        // Update Profile
        const updateUserProfile = (name, image) => {
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image
            })
        }

 



        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                const userEmail = currentUser?.email || user?.email;
                const loggedUser = { email: userEmail };
                setUser(currentUser);
                // console.log('current user', currentUser);
                setLoading(false);
                
                if (currentUser) {
                    axios.post('https://easy-hire-server-site.vercel.app/jwt', loggedUser,{withCredentials: true})
                        .then(res => {
                            console.log('token response', res.data);
                        })
                }
                else {
                    axios.post('https://easy-hire-server-site.vercel.app/logout', loggedUser, {
                        withCredentials: true
                    })
                        .then(res => {
                            console.log(res.data);
                        })
                }
            });
            return () => {
                return unsubscribe();
            }
        }, [])
    
    
    








    const authInfo = {

        user,
        loading,
        signIn,
        createUser,
        logOut,
        singWithGoogle,
        updateUserProfile


    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;