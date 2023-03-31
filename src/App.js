import Dashboard from "./Components/Dashboard/Dashboard";
import Patients from "./Components/Navigation/Patients";
import Login from "./Components/Login/Login";
import Responsables from "./Components/Navigation/Responsables";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;