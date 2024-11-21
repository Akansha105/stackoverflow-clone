import React,{createContext,useState} from "react";
export const LoginContext = createContext();
export const ContextProvider = ({children}) => {
    const[text,setText] = useState("");
  return (
    <LoginContext.Provider value={{text,setText}}>
        {children}
    </LoginContext.Provider>
  )
}
