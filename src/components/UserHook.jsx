import { useEffect } from "react";
import { useUserContext } from "./UserProvider";
import { setAuth } from "../app/api/api";


const UserHook = () => {
  const [user, setUser] = useUserContext();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setAuth(user.username, user.password);
    } else {
      const userAux = JSON.parse(localStorage.getItem("user"));
      if (userAux) {
        setAuth(userAux.username, userAux.password);
        setUser(userAux);
      }
    }
  }, [user]);

  return { user };
};

export default UserHook;