// import { createContext } from "react";

// export const UserContext = createContext();
// src/context/UserContext.jsx

import { createContext, useState } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([{
    name: "Suvarna",
    role: "Admin",
    id:1, 
  },
  {
    name: "Swati",
    role: "User",
    id:2,
  }]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}