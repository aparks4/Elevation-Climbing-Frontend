import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import PrivateRoute from '../utils/PrivateRoute';


function Nav() {
    const { user, logoutUser } = useContext(AuthContext);

    return(
        <nav>
            <div> 
                {user ? (
                    <>
                        <Link to='/'>Home</Link>
                        <Link to='/videos'>Dashboard</Link>
                        <Link to='/protected'>Protected Page</Link>
                        <Link to='/routes'>Routes</Link>
                        <button onClick={logoutUser}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
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