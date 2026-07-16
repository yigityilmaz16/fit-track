import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
            <h1>Welcome to Fit-Track App!</h1>
             <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/workouts">Workouts</Link>
             </nav>

        </header>
    )
}

export default Header;