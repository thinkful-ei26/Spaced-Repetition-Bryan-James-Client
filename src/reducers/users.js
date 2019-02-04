const initalState = {
  username: null,
  firstName : null,
  lastName : null,
  loading: false,
  error : null
};

export function registerReducer (state=initalState, action){
  if (action.type === 'REGISTER_REQUEST') {
      return Object.assign({}, state, {
          loading: true,
          error: null
      });
  }
  else if (action.type === 'REGISTER_SUCCESS') {
    
      return Object.assign({}, state, {
          loading: false,
          username: action.data.username,
          firstName : action.data.firstName,
          lastName : action.data.lastName,
          error : null
      });
  }
  else if (action.type === 'REGISTER_ERROR') {
      return Object.assign({}, state, {
          loading: false,
          error: {"status": action.error.status, "reason": action.error.reason}
      });
  }
  else if (action.type === 'REGISTER_LOGOUT'){
      return Object.assign({}, state, {
          loading : false,
          username: null,
          firstName : null,
          lastName : null,
          error: null
      });
  }
  return state;
}
