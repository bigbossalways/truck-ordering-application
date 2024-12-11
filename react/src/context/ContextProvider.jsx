import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => { },
    setUserToken: () => { },
});

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [userToken, setUserToken] = useState(null)
    return (
        <stateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
        }}>

            {children}
        </stateContext.Provider>
    )
}
export const UseStateContext = () => useContext(stateContext)