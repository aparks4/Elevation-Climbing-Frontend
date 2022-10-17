import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Dashboard(props) {
    const { user } = useContext(AuthContext);
    const [videos, setVideos] = useState([])
    const URL = 'http://localhost:8000/videos/'

    const getVideos = async () => {
        try {
            const response = await fetch(URL);
            const allVideos = await response.json()
            const userVideos = [];
            for (let i = 0; i < allVideos.length; i++) {
                if (allVideos[i].user === user.user_id) {
                    userVideos.push(allVideos[i])
                }
            }
            setVideos(userVideos)
            console.log('set videos')
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getVideos()
    }, [])

    const loaded = () => {
        return videos?.map((video) => {
            return (
                <div className="video-card">
                    <video width="320" height="240" controls>
                        <source src={video.video} type="video/mp4" />
                        <source src={video.video} type="video/ogg" />
                        <source src={video.video} type="video/webm" />
                        Your browser does not surrport the video tag.
                    </video>
                    <a href={`/videos/${video.id}`}><button id='detail-btn'>Details</button></a>
                </div>
            )
        })
    }

    const loading = () => {
            <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Your Sends</h1>
            <div className="dashboard-videos">
                {videos && videos.length ? loaded() : loading()}
            </div>
        </>
    )
}

export default Dashboard;