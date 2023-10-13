import React from "react";
import classes from "./AddUser.module.css"
import Card from "../UI/Card";

const formSubmitHandler = (event) => {
  event.preventDefault();
};

const AddUser = (props) => {
  return (
    <Card cssClass={classes.input}>
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username"></input>

      <label htmlFor="age">Age</label>
      <input type="number" id="age"></input>

      <button type="submit">Add User</button>
    </form>
    </Card>
  );
};

export default AddUser;
