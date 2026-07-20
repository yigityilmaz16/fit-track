import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import {Routes,Route} from "react-router-dom"
import Header from "./components/Header";

function App(){


  return(
    <div className="app-shell">
      <Header/>
      <Routes>
        <Route
        path="/"
        element={
          <Dashboard />
        }/>
        <Route 
        path="/workouts"
        element={
          <Workouts />
        }/>
      </Routes>
    </div>
  );

}

export default App;
