import React, { useState } from 'react';
import './App.css';
import fakedata from './fake data/users';
import Userinfo from './components/Userinfo';
import Cart from './components/Cart';

function App() {
  const [userinfo, setUserinfo] = useState(fakedata)

  const [usercart, setUsercart] = useState([])

  const handleAddUser = (user) => { // ekne user holo j button click korlam setar data and aita userinfo.js a pass hobe
    //console.log('added', user)
    const newUser = [...usercart, user]
    setUsercart(newUser)
  }

  return (
    <div className="user-container ">
      <div className="userInfo">
        
        <ul>
          {
            userinfo.map(user => <Userinfo user={user} handleAddUser={handleAddUser} key={user.id}></Userinfo>)
          }
        </ul>
      </div>
      <div className="userCart">
        <h1>Total Users: {userinfo.length}</h1>
        <h3>Users added: {usercart.length}</h3>
        <Cart cart = {usercart}></Cart> 
      </div>
      
    </div>

  );
}

export default App;
