import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return(
    <div className = "flex w-full h-screen">
      <div className = "w-full flex items-center justify-center">
        <Router>
          <Routes>
            <Route path = "/" element = {<Login/>}/>
            <Route path = "/Dashboard" element = {<Dashboard/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;