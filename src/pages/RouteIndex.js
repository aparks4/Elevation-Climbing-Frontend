import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function RouteIndex(props) {
    const [routes, setRoutes] = useState([]);
    const [newForm, setNewForm] = useState({
        color: "",
        wall: "",
        img: "",
        description: "",
    });

    const BASE_URL = "http://localhost:8000/routes/";

    const getRoutes = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allRoutes = await response.json()
            setRoutes(allRoutes)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getRoutes()
    }, [])

    const loaded = () => {
        return routes?.map((route) => {
            return (
                <Link to={`/routes/${route.id}`}>
                <div className="route-card">
                    <h2>{route.color}-{route.wall}</h2>
                    <img alt={route.color} src={route.img} />
                </div>
                </Link>

            )
        })
    }

    const loading = () => {
            <h1>Loading...</h1>
    }

    return (
        <>
            <div className="route-index-container">

                {routes && routes.length ? loaded() : loading()}

            </div>
        </>
 
    )
}

export default RouteIndex;