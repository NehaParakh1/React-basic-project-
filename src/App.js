import React, { useState } from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser'
function App() {
  const[usersList,setUsersList]= useState([])
  
  const addUserHandler=(uName, uAge)=> {
  setUsersList((prevUsersList)=>{
    return [...prevUsersList,{name:uName, age: uAge, id:Math.random().toString()}]
  })
  }

  return (
    <div>
<AddUser onAddUser={addUserHandler}></AddUser>
<UsersList users={usersList}/>
    </div>
  );
}

export default App;
