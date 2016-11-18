import { FETCH_POSTS } from '../actions/index';

const InitialState = {all:[], post: null};

export default function(state = InitialState, action) {
    console.log(FETCH_POSTS);
    switch(action.type){
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default:
        return state;
    }
}