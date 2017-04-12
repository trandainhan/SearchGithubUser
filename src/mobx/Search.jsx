import React from 'react';
import {observer} from "mobx-react";
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import UserDetails from './UserDetails';
import Loader from '../share/components/Loader';
import {
  compose, withHandlers, withState, withProps, onlyUpdateForKeys, mapProps
} from 'recompose';
import UserStore from './store/UserStore';

const enhancer = compose(
  withProps(() => ({
    store: new UserStore()
  })),
  withState('showDetailPage', 'setShowDetailPage', false),
  withState('loaded', 'setLoaded', true),
  withState('currentSearchKey', 'setCurrentSearchKey', ''),
  withState('currentRequest', 'setCurrentRequest', null),
  withHandlers({
    handleSearch: props => (value) => {
      if (!value) return;
      if (props.currentSearchKey === value) return;
      props.setCurrentSearchKey(value);
      props.req && window.clearTimeout(props.req);
      props.setLoaded(false);
      props.setCurrentRequest(window.setTimeout(() => {
        props.store.fetchUser(value).then(() => {
          props.setLoaded(true)
        })
      }, 500));
    },
    backToSearchView: props => () => {
      props.setShowDetailPage(false);
    },
    handleSelectUser: props => (user) => {
      props.store.setSelectedUser(user);
      props.setShowDetailPage(true);
    }
  }),
  mapProps(({store, ...other}) => ({
    ...other,
    users: store.users,
    selectedUser: store.selectedUser
  })),
  onlyUpdateForKeys(['loaded', 'showDetailPage']),
  observer
)

const Search = enhancer(({
  loaded,
  showDetailPage,
  backToSearchView,
  handleSearch,
  handleSelectUser,
  users,
  selectedUser
}) => {

  if (showDetailPage) {
    return <UserDetails user={selectedUser} onBack={backToSearchView} />
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Loader loaded={loaded}>
        <SearchResult users={users} onSelectUser={handleSelectUser} />
      </Loader>
    </div>
  )
})

export default Search;
