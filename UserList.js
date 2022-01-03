import React from "react";
import Card from "./Card";
import "./UserList.css";
function UserList(props) {
  return (
    <Card className="users">
      <ul>
        {props.item.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age}) {user.clgName}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
