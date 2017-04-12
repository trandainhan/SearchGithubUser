import {
  CHANGE_SEARCH_KEY,
  REQUEST_USER,
  RECEIVED_USER,
  SELECT_USER,
  RECEIVED_REPOS
} from '../actions/index';

const rootReducer = (state = {
  searchKey: '',
  isFetching: false,
  users: [],
  selectedUser: {},
  selectedRepos: []
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
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.user
      }
    case RECEIVED_REPOS:
      return {
        ...state,
        selectedRepos: action.repos
      }
    default:
      return state
  }
}

export default rootReducer
