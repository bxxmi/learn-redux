import React from "react";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";

function UserListContainer() {
  const users = useSelector((state) => {
    state.users.data;
  });

  return <UserList users={users} />;
}

export default UserListContainer;
