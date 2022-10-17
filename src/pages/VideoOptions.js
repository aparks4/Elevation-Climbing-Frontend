import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function VideoOptions() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [video, setVideo] = useState(null);
    const [formVideo, setFormVideo] = useState(null);
    const [formComment, setFormComment] = useState("");
    const URL = `http://localhost:8000/videos/${id}/`;

    const getVideo = async () => {
        try {
            const response = await fetch(URL);
            const result = await response.json();
            setVideo(result);
            setFormVideo(result.video);
            setFormComment(result.comment);
            console.log("retrieved video: ",  video)
        } catch(err) {
            console.log(err);
        }
    }

    const updateVideo = async (e) => {
        e.preventDefault();
        const body = new FormData();
        body.append('user', video.user);
        body.append('video', formVideo);
        body.append('comment', formComment);
        body.append('route_id', video.route_id);
        try {
            await fetch(URL, {
                method: 'PUT',
                body: body,
            })
            navigate('/videos')
        } catch(err) {
            console.log(err)
        }

    }

    const removeVideo = async () => {
        try {
            const options = {
                method: 'DELETE'
            };
            const response = await fetch(URL, options);
            navigate('/videos')
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getVideo();
    }, [])

    const loaded = () => {
        return (
            <div className="video-option-container">
                <video width="320" height="240" controls>
                    <source src={video.video} type="video/mp4" />
                    <source src={video.video} type="video/ogg" />
                    <source src={video.video} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div>
                    <form onSubmit={updateVideo} encType='multipart/form-data' >
                        <label htmlFor='user'></label>
                        <input type="hidden" value={video.user} name="user" id='user' />
                        <label htmlFor='video'>Edit Video File:</label>
                        <input type="file" src={formVideo} name="video" id='video' onChange={e => setFormVideo(e.target.files[0])} />
                        <label htmlFor='comment'>Edit Caption:</label>
                        <input type="text" value={formComment} name="comment" id="comment" placeholder="Caption" onChange={e => setFormComment(e.target.value)} />
                        <label htmlFor='route_id'></label>
                        <input type="hidden" value={video.route_id} name="route_id" id="route_id" />
                        <div>
                            <button type='submit'>Update</button>
                            <button onClick={removeVideo} id="delete-button">Delete Video</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const loading = () => {
        <h1>Loading...</h1>
    }


    return (
        <>
            {video ? loaded() : loading()}
        </>

    )
}

export default VideoOptions;