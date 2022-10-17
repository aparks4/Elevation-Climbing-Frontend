import { useContext } from 'react';
import UserInfo from '../components/UserInfo';
import AuthContext from '../context/AuthContext';


function Home(props) {
    const { user } = useContext(AuthContext);


    return (
        <div>
            {user && <UserInfo user={user} />}
        </div>
    )
}


export default Home;