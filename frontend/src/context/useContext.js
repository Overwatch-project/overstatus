import { createContext, useState } from "react";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
 
  return (
    <UserContext.Provider value={{ }}>
      {children}
    </UserContext.Provider>
  );
}