import {
    VALIDATE_RESPONSE_SUCCESS,
    VALIDATE_RESPONSE_ERROR,
    LOGOUT_VALIDATE,
} from '../actions/validate-response';
const initialState = {
    data: '',
    error: null,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case VALIDATE_RESPONSE_SUCCESS:
            return Object.assign({}, state, {data: action.data.feedback, error: null });
        case VALIDATE_RESPONSE_ERROR:
            return Object.assign({}, state, {error: action.error});
        case LOGOUT_VALIDATE:
            return {
                data: '',
                error: null,
            };
        default:
            return state;
    }
}
