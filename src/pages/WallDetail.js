import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function WallDetail() {
    const [routes, setRoutes] = useState([]);
    const { id } = useParams();
    const URL = "http://localhost:8000/routes/";

    const getRoutes = async () => {
        try {
            const response = await fetch(URL);
            const fetchedRoutes = await response.json();
            const wallRoutes = [];
            for (let i = 0; i < fetchedRoutes.length; i++) {
                if (fetchedRoutes[i].wall === id) {
                    wallRoutes.push(fetchedRoutes[i])
                }
            }
            setRoutes(wallRoutes);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getRoutes();
    }, []);

    const loaded = () => {
        return routes?.map((route) => {
            return (
                <Link to={`/routes/${route.id}`}>
                <div className="route-card">
                    <h2>{route.color}{route.wall}</h2>
                    <img alt={route.color} src={route.img} />
                    <p>{route.description}</p>
                </div>
                </Link>

            )
        })
    }

    const loading = () => {
        <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Wall {id}</h1>
            {routes && routes.length ? loaded() : loading()}
        </div>
    )
}

export default WallDetail;