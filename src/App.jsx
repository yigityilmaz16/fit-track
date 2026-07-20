import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import {Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App(){
const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});
useEffect(() => {
  document.body.classList.toggle("dark", darkMode);

  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);

  return(
    <div className="app-shell">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
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
