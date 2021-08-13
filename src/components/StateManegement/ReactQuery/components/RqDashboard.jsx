import RqUsers from "./RqUsers";
import RqUser from "./RqUser";
import { useState } from "react";
import { useIsFetching } from "react-query";
export default function RqDashboard() {
  const [selectedUser, setSelectedUser] = useState(null);
  const isFetching = useIsFetching()
  return (
    <div>
      <h3>Get Data</h3>
      {isFetching ? (<p style={{position: "fixed", top: "50%", right: "10%", color: "yellow"}}>Is Loading</p>) : null}
      <p>Users</p>
      <RqUsers setSelectedUser={setSelectedUser} />
      <br />
      <br />
      <p>User</p>
      <RqUser selectedUser={selectedUser} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
