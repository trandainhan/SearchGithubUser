import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import SearchResult from '../components/SearchResult';
// import UserDetails from './UserDetails';
import Loader from '../../share/components/Loader';

const Search = ({
  isFetching,
  // handleSelectUser,
  users,
  // selectedUser
}) => {
  // if (showDetailPage) {
  //   return <UserDetails user={selectedUser} onBack={backToSearchView} />
  // }
  return (
    <div>
      <SearchBar />
      <Loader loaded={!isFetching}>
        <SearchResult users={users} onSelectUser={() => ({})} />
      </Loader>
    </div>
  )
}

const mapStateToProps = state => {
  const { isFetching, users } = state
  return {
    isFetching: isFetching,
    users: users,
    selectedUser: {},
  }
}

const enhancer = connect(mapStateToProps)

export default enhancer(Search);
