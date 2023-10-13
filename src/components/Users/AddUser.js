import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const defualtState = "";
  const [userName, setUserName] = useState(defualtState);
  const [userAge, setUserAge] = useState(defualtState);

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
      return;
    }

    props.onAddUser(userName, userAge);
    setUserName(defualtState);
    setUserAge(defualtState);
  };

  return (
    <Card cssClass={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={userNameHandler}
          value={userName}
        ></input>

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          onChange={userAgeHandler}
          value={userAge}
        ></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
