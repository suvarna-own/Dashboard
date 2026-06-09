
import { useState } from "react";
import { UserContext } from "./UserContext";
import Home from "./Home";

function UserNames() {
  const [user, setUser] = useState("Suvarna");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Home />
    </UserContext.Provider>
  );
}

export default UserNames;