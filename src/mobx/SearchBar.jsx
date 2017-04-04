import React from 'react';
import {observer} from "mobx-react";
import { Button, FormControl } from 'react-bootstrap';
import { compose, withState, withHandlers, mapProps } from 'recompose';
import { flow, get } from 'lodash/fp';


const enhancer = compose(
  withState('searchKey', 'setSearchKey', ''),
  withHandlers({
    handleSearch: props => () => {
      props.onSearch(props.searchKey);
    },
    handleKeyPress: props => (e) => {
      if (e.key === 'Enter') {
        props.onSearch(props.searchKey);
      }
    }
  }),
  mapProps(({setSearchKey, ...others}) => ({
    ...others,
    setSearchKey: flow(get('target.value'), setSearchKey)
  })),
  observer
)

var SearchBar = enhancer(({searchKey, setSearchKey, handleSearch, handleKeyPress}) => (
  <div className="row search-bar">
    <div className="col-md-9">
      <FormControl
        placeholder="Search..."
        value={searchKey}
        onChange={setSearchKey}
        onKeyPress={handleKeyPress}
      />
    </div>
    <div className="col-md-3 btn-search">
      <Button bsStyle="primary" onClick={handleSearch}>Search</Button>
    </div>
  </div>
))

SearchBar.propTypes = {
  onSearch: React.PropTypes.func
}

export default SearchBar;
