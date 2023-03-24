import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

function App(){
  return(
    <div className = "flex w-full h-screen">
      <div className = "w-full flex items-center justify-center">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;