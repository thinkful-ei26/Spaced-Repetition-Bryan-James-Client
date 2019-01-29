import {
    VALIDATE_RESPONSE_SUCCESS,
    VALIDATE_RESPONSE_ERROR,
} from '../actions/validate-response'
const initialState = {
    data: '',
    error: null,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case VALIDATE_RESPONSE_SUCCESS:
            return { ...state, data: action.data, error: null }
        case VALIDATE_RESPONSE_ERROR:
            return { ...state, error: action.error }
        default:
            return state
    }
}
