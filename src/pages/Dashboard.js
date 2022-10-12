import { useState, useEffect } from 'react';

function Dashboard(props) {
    const [videos, setVideos] = useState([])
    const URL = 'http://localhost:8000/videos/'

    const getVideos = async () => {
        try {
            const response = await fetch(URL);
            const allVideos = await response.json()
            setVideos(allVideos)
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
                    <p>{video.comment}</p>
                </div>
            )
        })
    }

    const loading = () => {
            <h1>Loading...</h1>
    }

    return (
        <>
            {videos && videos.length ? loaded() : loading()}
        </>
    )
}

export default Dashboard;