import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from './auth.config';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)

const emailPassRegister = (auth,email,password) => {
  return createUserWithEmailAndPassword(auth,email,password);
}

const emailPassLogin = (email,password) => {
  return signInWithEmailAndPassword(auth,email,password);
}

const googleLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth,googleProvider)
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
  })
  return () => unsubscribe();
},[])

const authInfo = {user, emailPassRegister, emailPassLogin, googleLogin}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider