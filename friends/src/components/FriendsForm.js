import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsForm extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/api/friends/id")
      .then(res => {
        this.setState({
          ...this.state,
          friends:res.data
        });
      })
      .catch(err => {
        console.log("friends error", err);
      })
  }

  render() {
    return (
      <div className="list-of-friends">
        <div className="title-wrap">
          <h2>Friends List API</h2>
        </div>
        <div className="friends-display">
        
        </div>
        <div className="friends-form">
          <div className="name-wrap">
            <label>Name</label>
            <input 
              name="firstName"
              type="text"
              className="form-inputs"
            />
          </div>
          <div className="name-wrap">
            <label>Age</label>
            <input 
              name="age"
              type="text"
              className="form-inputs"
            />
          </div>
          <div className="name-wrap">
            <label>Email</label>
            <input 
              name="email"
              type="text"
              className="form-inputs"
            />
          </div>
        </div>
        <div className="footer-wrap">
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default FriendsForm;