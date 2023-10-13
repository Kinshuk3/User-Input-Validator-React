import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersData, setUsersData] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUsersData((prevstate) =>{
      return [...prevstate, {name: uName, age: uAge, id: Math.random().toString()}] 
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {usersData.length !== 0 && <UsersList users={usersData}/>}
    </div>
  );
}

export default App;
