import { useEffect, useState } from 'react';
import useAxios from './useAxios';

function ProtectedPage() {
    const [res, setRes] = useState("");
    const api = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/test/");
                setRes(response.data.response);
            } catch(err) {
                console.log(err)
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Protected Page</h1>
            <p>{res}</p>
        </div>
    )

}

export default ProtectedPage;