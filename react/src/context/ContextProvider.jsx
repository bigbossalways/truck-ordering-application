import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => { },
    setUserToken: () => { },
});

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
  
    const setUserToken = (token) => {
      if (token) {
        localStorage.setItem('TOKEN', token)
      } else {
        localStorage.removeItem('TOKEN')
      }
      _setUserToken(token);
    }
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