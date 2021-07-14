import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search('beautiful japan')
    }, []);

    // change the func onTermSubmit to search as that is what it does. remember to change the name where it is  called too
    const search = async(term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
    };
    // return a list of videos and a func to update that list
    return [videos, search];
}

export default useVideos