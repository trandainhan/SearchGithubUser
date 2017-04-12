import fetch from 'axios';
import User from '../model/User';

export const CHANGE_SEARCH_KEY = 'CHANGE_SEARCH_KEY';
export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVED_USER = 'RECEIVED_USER';

export const changeSearchKey = text => ({
  type: CHANGE_SEARCH_KEY,
  text
})

export const requestUser = text => ({
  type: REQUEST_USER,
  text
})

export const receivedUser = (users) => ({
  type: RECEIVED_USER,
  receivedAt: Date.now(),
  users
})

export const fetchUser = searchKey => dispatch => {
  dispatch(requestUser(searchKey));
  return fetch.get('https://api.github.com/search/users?q=' + searchKey).then(({data}) => {
    const items = data.items;
    const users = items.map(item => {
      return new User(item)
    });
    dispatch(receivedUser(users));
  })
}
