import { useState } from "react";
import { createContext } from "react";

export const FirebaseContext = createContext(null)

// another way of creating context
// after login store userdetails

export const AuthContext = createContext(null)

export default function Context({children}){

    const [user,setUser] = useState(null)

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
} 