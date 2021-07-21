import React from "react";
import { friends } from "./../../../server";
import FriendsListItem from "./FriendsListItem";

const FriendsList = (props) => {
  const { friends } = props;

  return (
    <div>
      {friends?.map((friend) => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </div>
  )
}

export default FriendsList