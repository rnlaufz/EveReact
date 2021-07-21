import { CALL_CONTACT } from "../actions/types";

const initialState = {
    callContact: false
};



export default function(state = initialState, action){
    switch(action.type){
        case CALL_CONTACT:
            return {
                ...state,
                callContact: action.callContact
            };    
           
        default:
            return state;    
    }
};