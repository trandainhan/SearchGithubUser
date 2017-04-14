import React from 'react';
import { connect } from 'react-redux';
import { Button, FormControl } from 'react-bootstrap';
import { changeSearchKey, fetchUser } from '../actions';

const SearchBar = ({searchKey, handleChange, handleSearch, handleKeyPress}) => (
  <div className="row search-bar">
    <div className="col-md-9">
      <FormControl
        placeholder="Search..."
        value={searchKey}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
    <div className="col-md-3 btn-search">
      <Button bsStyle="primary" onClick={handleSearch}>Search</Button>
    </div>
  </div>
)

SearchBar.propTypes = {
  onSearch: React.PropTypes.func
}

const mapStateToProps = state => {
  const { searchKey, isFetching } = state
  return {
    searchKey,
    isFetching
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { searchKey, isFetching } = stateProps
  const { dispatch } = dispatchProps
  return {
    searchKey,
    handleChange: e => {
      dispatch(changeSearchKey(e.target.value))
    },
    handleSearch: () => {
      dispatch(fetchUser(searchKey))
    },
    handleKeyPress: (e) => {
      if (e.key === 'Enter') {
        !isFetching && dispatch(fetchUser(searchKey))
      }
    },
    ...ownProps
  }
}

const enhancer = connect(mapStateToProps, null, mergeProps)

export default enhancer(SearchBar);
