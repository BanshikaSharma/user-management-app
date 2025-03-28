// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Users from './components/Users';
import EditUser  from './components/EditUser'; // Ensure no trailing spaces
import CreateUser  from './components/CreateUser'; // Ensure no trailing spaces
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>User Management Application</h1>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/users" element={<PrivateRoute component={Users} />} />
                    <Route path="/edit/:id" element={<PrivateRoute component={EditUser } />} />
                    <Route path="/create" element={<PrivateRoute component={CreateUser } />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;