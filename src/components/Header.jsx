import { Link } from "react-router-dom";
function Header({ darkMode, setDarkMode }){
    return(
        <header className="site-header">
            <h1 className="brand">Welcome to Fit-Track App!</h1>
            <button
             type="button"
                className="theme-toggle"
             onClick={() => setDarkMode((previousMode) => !previousMode)}
            >
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>
             <nav className="main-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/workouts">Workouts</Link>
             </nav>

        </header>
    )
}

export default Header;
