import useUsers from "./hooks/useUsers";
import userService, { User } from "./BackEnd/services/user-service";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    // Optimistic, UI first then server
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id)
    .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: "Cliff" };
    setUsers([newUser, ...users]);

    // State not updated yet, so res.data does not double count with newUser
    userService.add(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!!!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser)
    .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name} {user.id}
            <div>
              <button
                className="btn btn-outline-secondary mx-5"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
