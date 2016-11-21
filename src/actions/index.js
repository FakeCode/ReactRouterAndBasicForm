import axios from 'axios';

export const FETCH_POST ='FETCH_POST';
export const CREATE_POST ='CREATE_POST';

const  rootUrl = 'http://reduxblog.herokuapp.com/api';
const  apiKey ='?umeshmaharjan'; //define your unique id

export default function fetchPosts() {
const request = axios.get(`${rootUrl}/posts${apiKey}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function createPost(props){
const request = axios.post(`${rootUrl}/posts${apiKey}`, props);
    return {
        type: CREATE_POST,
        payload: request
    };
}