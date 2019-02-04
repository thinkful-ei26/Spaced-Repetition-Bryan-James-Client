import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerRequest = () =>({
    type: 'REGISTER_REQUEST'
});
export const registerSuccess = data=>({
    type: 'REGISTER_SUCCESS',
    data
});
export const registerError = (error)=>({
    type: 'REGISTER_ERROR',
    error
});

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            if(res.error){
           if(res.error.status===401){
                dispatch(registerError(res));
            }
            }else {
                // console.log("no error", res)

                dispatch(registerSuccess(res));
               
         } 
        })
        .catch(err => {
            if(err.error.status === 401){
               dispatch(registerError(err.error));
            }
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
