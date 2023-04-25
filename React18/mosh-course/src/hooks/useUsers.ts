import { useEffect, useState } from "react";
import userService, { User } from "../BackEnd/services/user-service";
import { CanceledError } from "../BackEnd/services/api-client";

// Custom hook if you have other components that need access to the same database
const useUsers = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { req, cancelReq } = userService.getAll<User>();

    req
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      cancelReq();
    };
  }, []);
  return { users, error, isLoading, setUsers, setError }
}

export default useUsers;