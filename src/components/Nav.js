import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/routes">Routes</Link>
        </nav>
    )
}

export default Nav;