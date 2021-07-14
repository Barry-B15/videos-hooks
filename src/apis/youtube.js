import axios from "axios";

// youtube api
const KEY = "AIzaSyDt-LZtDr2nz5gP5GTL3NX7kYA0-IEZwzk";
// "AIzaSyDt-LZtDr2nz5gP5GTL3NX7kYA0-IEZwzk";
//2nd api "AIzaSyB6W-mLnVNvN90p-asJs0TeX9XaQof8EOk";

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