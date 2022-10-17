import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';


function Nav() {
    const { user, logoutUser } = useContext(AuthContext);

    return(
        <nav>
            <div> 
                {user ? (
                    <>
                        <Link to='/'>Home</Link>
                        <Link to='/videos'>Dashboard</Link>
                        <Link to='/map'>Find a Route</Link>
                        <Link to='/routes'>All Routes</Link>
                        <button onClick={logoutUser} id='logout-btn'>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to='/'>Home</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                )
            }
            </div>
        </nav>
    )
}

export default Nav;