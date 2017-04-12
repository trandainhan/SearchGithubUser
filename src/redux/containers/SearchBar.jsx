import React from 'react';
import { connect } from 'react-redux';
import { Button, FormControl } from 'react-bootstrap';
import { changeSearchKey, fetchUser } from '../actions/index';

const SearchBar = ({searchKey, handleChange, handleSearch, testProps}) => (
  <div className="row search-bar">
    <p>{testProps}</p>
    <div className="col-md-9">
      <FormControl
        placeholder="Search..."
        value={searchKey}
        onChange={handleChange}
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
  const { searchKey } = state
  return {
    searchKey: searchKey
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { searchKey } = stateProps
  const { dispatch } = dispatchProps
  return {
    searchKey,
    handleChange: e => {
      dispatch(changeSearchKey(e.target.value))
    },
    handleSearch: () => {
      dispatch(fetchUser(searchKey))
    },
    ...ownProps
  }
}

const enhancer = connect(mapStateToProps, null, mergeProps)

export default enhancer(SearchBar);
