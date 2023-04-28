import React from 'react';
import Dashboard from "./Components/Dashboard/Dashboard";
import Patients from "./Components/Navigation/Patients";
import Login from "./Components/Login/Login";
import Responsables from "./Components/Navigation/Responsables";
import {BrowserRouter as Router, Routes, Route, Link, ProtectedRoute} from "react-router-dom";
import Appointments from "./Components/Navigation/Appointments";
import Users from "./Components/Navigation/Users";
import axios from "axios";

axios.defaults.withCredentials = true;

function App(){
  return(
    <div className = "flex w-full h-screen">
      <div className = "w-full flex items-center justify-center">
        <Router>
          <Routes>
            <Route path = "/" element = {<Login/>}/>
            <Route path = "/Dashboard" element = {<Dashboard/>}/>
            <Route path = "/Patients" element = {<Patients/>}/>
            <Route path = "/Responsables" element = {<Responsables/>}/>
            <Route path = "/Appointments" element = {<Appointments/>}/>
            <Route path = "/Users" element = {<Users/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;