import React from "react";
import axiosWithAuth from "./../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friends: []
  }

  render() {
    return (
      <div className="list-of-friends">
        <div className="title-wrapper">
          <h2>Friends List API</h2>
        </div>
      </div>
    )
  }
}

export default FriendsList;