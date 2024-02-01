import React from 'react';
import './App.css';
import Users from './pages/Users';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path={'/'} Component={Users}/>
          <Route path={'/login'} Component={Login}/>
          <Route path={'/register'} Component={Register}/>
        </Routes>
      {/* <Users/> */}
    </div>
    </Router>
  );
}

export default App;
