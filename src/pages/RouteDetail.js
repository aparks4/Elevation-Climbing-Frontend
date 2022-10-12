import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RouteDetail() {
    const [route, setRoute] = useState(null);
    const { id } = useParams();
    const URL = `http://localhost:8000/routes/${id}`;

    const getRoute = async () => {
        try {
            const response = await fetch(URL);
            const result = await response.json();
            setRoute(result);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRoute()
    }, []);

    const loaded = () => {
        return (
            <div class="route-card">
                <h1>{route.color}{route.wall}</h1> 
                <img src={route.img} alt={route.color} />
                <p>{route.description}</p>
            </div>
        )
    }

    const loading = () => {
        <h1>Loading...</h1>
    }

    return (
        route ? loaded() : loading()
    )
}

export default RouteDetail;