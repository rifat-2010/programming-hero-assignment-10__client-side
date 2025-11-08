import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

     const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   console.log(auth);
const authInfo = {
    user, setUser, loading, setLoading,
}

// useing useEffect for extra safety of Unscribe variable
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
        // console.log(CurrentUser);
        setUser(CurrentUser);
        setLoading(false);
    })
    return () => {
        unsubscribe()
    }
}, [])
   


    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;