import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './navbar'
import Home from './home'
import Login from './login'
import Deposit from './deposit'
import Withdraw from './withdraw'
import Balance from './balance'
import AllData from './alldata'
import CreateAccount from './createaccount'
const UserContext = React.createContext(null);


function App() {
  return (
   
    <HashRouter>
     <NavBar/>
     <UserContext.Provider value={{users:[{name: 'colin', email: 'colin@badbank.com', password: 'secret', balance: 100}]}}>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/CreateAccount/" element={<CreateAccount/>} />
        <Route path="/login/" element={<Login/>} />
        <Route path="/deposit/" element={<Deposit/>} />
        <Route path="/withdraw/" element={<Withdraw/>} />
        <Route path="/balance/" element={<Balance/>} />
        <Route path="/alldata/" element={<AllData/>} />
      </Routes>
     </UserContext.Provider>
    </HashRouter>

  
  )
}

export default App;
