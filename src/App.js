import React, { useState, Fragment } from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser'
function App() {
  const[usersList,setUsersList]= useState([])
  
  const addUserHandler=(uName, uAge, uCollege)=> {
  setUsersList((prevUsersList)=>{
    return [...prevUsersList,{name:uName, age: uAge, collegename:uCollege, id:Math.random().toString()}]
  })
  }

  return (
    <Fragment>
<AddUser onAddUser={addUserHandler}></AddUser>
<UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
