import { FETCH_POST } from '../actions/index';

const InitialState = {all:[], post: null};

export default function(state = InitialState, action) {
    switch(action.type){
        case FETCH_POST:
            return {...state,  all: action.payload.data };
        default:
        return state;
    }
}