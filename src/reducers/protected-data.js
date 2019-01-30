import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_ALL_QUESTIONS_SUCCESS,
    COUNT_CORRECT,
    COUNT_WRONG
} from '../actions/protected-data';

const initialState = {
    data: '',
    allQuestions : [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if(action.type === FETCH_ALL_QUESTIONS_SUCCESS){
        let countified = action.data.map(item=> {
            item.count = 0;
            return item;
        });
        
        return Object.assign({}, state, {
            allQuestions: [...countified],
            error: null
        });
    } else if(action.type === COUNT_CORRECT){
        let newCount = state.allQuestions.map(item=> {
            if(item.id===action.data.id){
                item.count++;
            }
            return item;
        });
        return Object.assign({}, state, {allQuestions: [...newCount]});
    } else if(action.type === COUNT_WRONG){
        let newCount = state.allQuestions.map(item=> {
            if(item.id===action.data.id){
                (item.count >0)? item.count--: item.count = 0;
            }
            return item;
        });
        return Object.assign({}, state, {allQuestions: [...newCount]});
    }
    return state;
}
