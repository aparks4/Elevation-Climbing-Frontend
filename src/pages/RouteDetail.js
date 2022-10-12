import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RouteDetail() {
    const [route, setRoute] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    const URL = `http://localhost:8000/routes/${id}/`;
    const VIDEO_URL = 'http://localhost:8000/videos/';

    const getRoute = async () => {
        try {
            const response = await fetch(URL);
            const result = await response.json();
            setRoute(result);
        } catch(err) {
            console.log(err);
        }

    }

    const getVideos = async () => {
        try {
            const response = await fetch(VIDEO_URL);
            const fetchedVideos = await response.json();
            setVideos(fetchedVideos);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getRoute();
        getVideos();
    }, []);

    const loaded = () => {
        return (
            <>
                <div className="route-card">
                    <h1>{route.color}{route.wall}</h1> 
                    <img src={route.img} alt={route.color} />
                    <p>{route.description}</p>
                </div>
            </>
        )
    }

    const loading = () => {
        <h1>Loading...</h1>
    }

    return (
        <>
            {route && videos? loaded() : loading()}
            {route && videos?.map((video) => {
                if (video.route_id === route.id) {
                    return(
                        <div className="video-card">
                            <video width="320" height="240" controls>
                                <source src={video.video} type="video/mp4" />
                                <source src={video.video} type="video/ogg" />
                                <source src={video.video} type="video/webm" />
                                Your browser does not surrport the video tag.
                            </video>
                            <p>{video.comment}</p>
                        </div>
                    )
                }
            })} 
    
        </>
        

    )
}

export default RouteDetail;