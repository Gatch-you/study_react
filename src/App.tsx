import React from 'react';
import './App.css';
import Users from './pages/Users';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import RedirectToUsers from './components/RedirectToUsers';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path={'/'} Component={RedirectToUsers}/>
          <Route path={'/users'} Component={Users}/>
          <Route path={'/login'} Component={Login}/>
          <Route path={'/register'} Component={Register}/>
        </Routes>
      {/* <Users/> */}
    </div>
    </Router>
  );
}

export default App;
