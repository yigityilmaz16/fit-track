import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
            <h1>Welcome to Fit-Track App!</h1>
            <Link to="/">
            <p>Dashboard</p>
            </Link>
            <Link to="/workouts">
            <p>Workouts</p>
            </Link>

        </header>
    )
}

export default Header;