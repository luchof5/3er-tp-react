import { useState, createContext, useContext } from "react";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {

    const [name, setName] = useState('')

    const updateUser = (name) => {
        setName(name);
      };

    return (
        <userContext.Provider value={{ name, updateUser }}>
            {children}
        </userContext.Provider>
    )
}