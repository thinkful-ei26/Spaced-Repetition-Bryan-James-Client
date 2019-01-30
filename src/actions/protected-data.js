import { API_BASE_URL } from '../config'
import { normalizeResponseErrors } from './utils'
import { logoutValidate } from './validate-response';

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS'
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data,
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR'
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error,
});

export const FETCH_ALL_QUESTIONS_SUCCESS = 'FETCH_ALL_QUESTIONS_SUCCESS';
export const fetchAllQuestionsSuccess = data => ({
    type: FETCH_ALL_QUESTIONS_SUCCESS,
    data,
});

export const COUNT_CORRECT = 'COUNT_CORRECT';
export const countCorrect = data => ({
    type: COUNT_CORRECT,
    data,
});
export const COUNT_WRONG = 'COUNT_WRONG';
export const countWrong = data => ({
    type: COUNT_WRONG,
    data,
});

export const RESET_SESSION_SCORE = 'RESET_SESSION_SCORE';
export const resetSessionScore = () => ({
    type: RESET_SESSION_SCORE,
});

export const LOGOUT_PROTECTED_DATA = 'LOGOUT_PROTECTED_DATA';
export const logoutProtectedData = () => ({
    type: LOGOUT_PROTECTED_DATA,
});

export const fetchAllQuestions = user => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/all`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(user),
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(fetchAllQuestionsSuccess(data));
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const fetchProtectedData = question => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/next`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(question),
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(fetchProtectedDataSuccess(data))
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err))
        })
}

export const resetUserQuestions = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/reset`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            //'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${authToken}`,
        },
        
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => {
            dispatch(fetchAllQuestionsSuccess([...data.questions]));//refresh all questions
            dispatch(fetchProtectedData());//grab new head question
            dispatch(logoutValidate());//reset feedback
            dispatch(resetSessionScore());//state session score to 0
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

