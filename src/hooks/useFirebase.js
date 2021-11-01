import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import authInitialize from "../Component/Shared/Login/firebase/firebase.init";
authInitialize();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // Google Log In
    const googleProvider = new GoogleAuthProvider();
    const googleLogIn = () => {
        setIsLoading(true)
            return signInWithPopup(auth, googleProvider)
                .finally(() => setIsLoading(false));
    }

    // use effect for logged in
    useEffect(() => {
      const unsubcribed = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user)
          } else {
              setUser({ })
          }
          setIsLoading(false)
      });
      return () => unsubcribed;
  }, [isLoading]);
  // log out user 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false))
    }
    // return all variable and state
    return {
        user,
        googleLogIn,
        isLoading,
        logOut,
        setUser,
        signInWithPopup
    }

};

export default useFirebase;