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
                <div class="route-card">
                    <Link to={`/routes/${route.id}`}>{route.color}{route.wall}</Link>
                    <img alt={route.color} src={route.img} />
                    <p>{route.description}</p>
                </div>
            )
        })
    }

    const loading = () => {
            <h1>Loading...</h1>
    }

    const handleChange = (e) => {
        setNewForm({ ...newForm, [e.target.name]: e.target.value });
    }

    const createRoute = async (routeData) => {
        try {
            const newRoute = await fetch(BASE_URL, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(routeData),
            });
            getRoutes();
        } catch(err) {
            console.log(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRoute = await createRoute();

        setNewForm({ color: "", wall: "", img: "", description: "" })
    }

    return (
        <>
            <div class="route-index-container">
                {routes && routes.length ? loaded() : loading()}

            </div>
            <div class="create-form">
                <h2>Add a new route</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={newForm.color} name="color" placeholder="Color" onChange={handleChange} />
                    <input type="text" value={newForm.wall} name="wall" placeholder="Wall" onChange={handleChange} />
                    <input type="text" value={newForm.img} name="img" placeholder="https://" onChange={handleChange} />
                    <input type="text" value={newForm.description} name="description" placeholder="Description" onChange={handleChange} />
                    <input type="submit" value="Create Route" />
                </form>
            </div>
        </>
 
    )
}

export default RouteIndex;