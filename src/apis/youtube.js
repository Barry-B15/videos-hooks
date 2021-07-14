import axios from "axios";

// youtube api
const KEY = "AIzaSyDt-LZtDr2nz5gP5GTL3NX7kYA0-IEZwzk";


// create a preconfigured instance of axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', //GET Request fro youtube doc

    // add some required paramaters
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});
