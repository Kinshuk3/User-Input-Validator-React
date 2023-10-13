import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const defualtState = "";
  const [userName, setUserName] = useState(defualtState);
  const [userAge, setUserAge] = useState(defualtState);
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
        setError({
            title: 'Invalid Input',
            message: 'Enter non empty values for name and age.'
        })
      return;
    }
    if (+userAge < 1) {
        setError({
            title: 'Invalid Age',
            message: 'Enter non negative age'
        })
      return;
    }

    props.onAddUser(userName, userAge);
    setUserName(defualtState);
    setUserAge(defualtState);
  };

  const errorHandler = () =>{
    setError(null)
    setUserName(defualtState);
    setUserAge(defualtState);
  }

  return (
    <div>
    {error && <ErrorModal errorTitle={error.title} errorMessage={error.message} onAcknowledge={errorHandler}/>}
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
    </div>
  );
};

export default AddUser;
