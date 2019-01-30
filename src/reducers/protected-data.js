import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    FETCH_ALL_QUESTIONS_SUCCESS,
    COUNT_CORRECT,
    COUNT_WRONG,
    LOGOUT_PROTECTED_DATA,
} from '../actions/protected-data';

const initialState = {
    data: '',
    allQuestions : [],
    sessionScore : 0,
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
            item.correct = false;
            return item;
        });
        
        return Object.assign({}, state, {
            allQuestions: [...countified],
            error: null
        });
    } else if(action.type === COUNT_CORRECT){
        let newCount = state.allQuestions.map(item=> {
            if(item.id===action.data.id){
                item.correct = true;
            }
            return item;
        });
        let newScore = state.sessionScore + 1;
        return Object.assign({}, state, {allQuestions: [...newCount], sessionScore: newScore});
    }
     else if(action.type === COUNT_WRONG){
        let wrongBefore = state.allQuestions.filter(item=>item.id===action.data.id);
        let newDecrement = 0;
        if (wrongBefore[0].correct){
            newDecrement = 1;
        }
        let newScore = state.sessionScore - newDecrement;
        if(newScore < 0){
            newScore = 0;
        }
        return Object.assign({}, state, {sessionScore: newScore});
    }
    else if(action.type === LOGOUT_PROTECTED_DATA){
        let resetState = {
            data: '',
            allQuestions : [],
            sessionScore : 0,
            error: null
        };// the initial State values
        return resetState;
    }
    return state;
}
