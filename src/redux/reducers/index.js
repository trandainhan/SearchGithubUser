import { CHANGE_SEARCH_KEY, REQUEST_USER, RECEIVED_USER } from '../actions/index';

const rootReducer = (state = {
  searchKey: '',
  isFetching: false,
  users: []
}, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_KEY:
      return {
        ...state,
        searchKey: action.text,
      }
    case REQUEST_USER:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVED_USER:
      return {
        ...state,
        isFetching: false,
        users: action.users
      }
    default:
      return state
  }
}

export default rootReducer
