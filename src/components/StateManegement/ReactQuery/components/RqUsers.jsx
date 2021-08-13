import useUsers from "../hooks/query-hooks/useUsers";

export default function RqUsers({setSelectedUser}) {
  const users = useUsers();
console.log(users)

  return (
    <div>
      {users.isLoading && <p>Loading users...</p>}

      {users.isError && <p>Could not fetch users</p>}

      {users.isSuccess && (
        <ul className="centered-list">
          {users.data.map((user) => (
            <li key={user.id} onClick={()=> setSelectedUser(user.id)}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
