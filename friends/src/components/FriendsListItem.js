import React from "react";
// import { Link } from "react-router-dom";

const FriendsListItem = (props) => {
  const { id, name, age, email } = props.friend;

  return(
    <tr key={id}>
      <td>{name}</td>
      <td>{age}</td>
      <td>{email}</td>
    </tr>
  );
}

export default FriendsListItem;
