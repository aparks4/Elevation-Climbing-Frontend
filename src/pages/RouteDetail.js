import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';



function RouteDetail() {
    const { user } = useContext(AuthContext);
    const [route, setRoute] = useState(null);
    const [videos, setVideos] = useState([]);
    const [formVideo, setFormVideo] = useState(null);
    const [formComment, setFormComment] = useState("");
    const { id } = useParams();
    const URL = `http://localhost:8000/routes/${id}/`;
    const VIDEO_URL = 'http://localhost:8000/videos/';

    const navigate = useNavigate();

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

    const createVideo = async () => {
        const body = new FormData();
        body.append('user', user.user_id);
        body.append('video', formVideo);
        body.append('comment', formComment);
        body.append('route_id', id);
        const response = await fetch('http://localhost:8000/videos/new/', {
            method: 'POST',
            body: body,
        });
        if (response.status === 201) {
            navigate('/routes');
        } else {
            alert("Something went wrong!")
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, formVideo, formComment, id);
        createVideo();
        
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
                                Your browser does not support the video tag.
                            </video>
                            <p>{video.comment}</p>
                        </div>
                    )
                }
            })} 
            <form onSubmit={handleSubmit} encType='multipart/form-data' >
                <label htmlFor='user'></label>
                <input type="hidden" value={user.user_id} name="user" id='user' />
                <label htmlFor='video'>Video</label>
                <input type="file" src={formVideo} name="video" id='video' onChange={e => setFormVideo(e.target.files[0])} />
                <label htmlFor='comment'>Caption</label>
                <input type="text" value={formComment} name="comment" id="comment" placeholder="Caption" onChange={e => setFormComment(e.target.value)} />
                <label htmlFor='route_id'></label>
                <input type="hidden" value={id} name="route_id" id="route_id" />
                <button type='submit'>Post Beta</button>
            </form>
    
        </>
        

    )
}

export default RouteDetail;