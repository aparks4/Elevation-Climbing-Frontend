import { useContext } from 'react';
import UserInfo from '../components/UserInfo';
import AuthContext from '../context/AuthContext';


function Home(props) {
    const { user } = useContext(AuthContext);


    return (
        <div className='home-container'>
            <img src='https://i.imgur.com/n63Xycq.png' alt='Elevation logo' id='logo'></img>
            {user && <UserInfo user={user} />}
        </div>
    )
}


export default Home;