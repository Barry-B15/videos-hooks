import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    // replace the hardcoded search term with a defaultSearchTerm and pass it  as a props to the func def
    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm]);
    //also add it here as suggested by react

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