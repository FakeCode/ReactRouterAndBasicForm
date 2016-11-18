import axios from 'axios';

export const FETCH_POST ='FETCH_POST';

const  rootUrl = 'http://reduxblog.herokuapp.com/api';
const  apiKey ='?umeshmaharjan'; //define your unique id

export default function fetchPosts() {
    console.log('R');
const request = axios.get(`${rootUrl}/posts${apiKey}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}