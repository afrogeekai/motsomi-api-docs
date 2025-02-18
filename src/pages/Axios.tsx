import { useEffect } from 'react';
import { fetchData } from '../services/dummy.json.service';

export const Axios = () => {

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div></div>
    )
}
