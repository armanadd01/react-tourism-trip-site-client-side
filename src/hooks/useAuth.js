import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider";

const useAuth = () => {
    // init Auth Context
    return useContext(AuthContext);
}

export default useAuth;