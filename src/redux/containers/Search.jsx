import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import SearchResult from '../components/SearchResult';
import UserDetails from '../components/UserDetails';
import Loader from '../../share/components/Loader';
import { compose, withState, withHandlers } from 'recompose';
import { selectUser } from '../actions';

const Search = ({
  isFetching,
  showDetailPage,
  handleSelectUser,
  users,
  selectedUser,
  backToSearchView
}) => {
  if (showDetailPage) {
    return <UserDetails user={selectedUser} onBack={backToSearchView} />
  }
  return (
    <div>
      <SearchBar />
      <Loader loaded={!isFetching}>
        <SearchResult users={users} onSelectUser={handleSelectUser} />
      </Loader>
    </div>
  )
}

const mapStateToProps = state => {
  const { isFetching, users, selectedUser } = state
  return {
    isFetching: isFetching,
    users: users,
    selectedUser: selectedUser
  }
}

const enhancer = compose(
  connect(mapStateToProps),
  withState('showDetailPage', 'setShowDetailPage', false),
  withHandlers({
    backToSearchView: props => () => {
      props.setShowDetailPage(false)
    },
    handleSelectUser: props => (user) => {
      props.setShowDetailPage(true)
      props.dispatch(selectUser(user))
    }
  })
)

export default enhancer(Search);
