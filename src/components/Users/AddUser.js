import React from "react";
import classes from "./AddUser.module.css"

const formSubmitHandler = (event) => {
  event.preventDefault();
};

const AddUser = (props) => {
  return (
    <form onSubmit={formSubmitHandler} className={classes.input}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username"></input>

      <label htmlFor="age">Age</label>
      <input type="number" id="age"></input>

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
