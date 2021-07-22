import { CALL_CONTACT } from "./types";

// @TO_DO finish action of setting secNav title 
export const callContactModel = (callContact) => dispatch => {
    dispatch({
        type: CALL_CONTACT,
        callContact: callContact
    })
      console.log(callContact)
   }