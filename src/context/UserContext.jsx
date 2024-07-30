import { useState, createContext, useContext } from "react";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState('')

    const updateUser = (user) => {
        setUser(user);
      };

    return (
        <userContext.Provider value={{ user, updateUser }}>
            {children}
        </userContext.Provider>
    )
}