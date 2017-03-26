import React from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";
import { Button, FormControl } from 'react-bootstrap';

@observer class SearchBar extends React.Component {

  @observable searchKey = ''

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleSearch() {
    this.props.onSearch(this.searchKey);
  }

  handleChange(e) {
    this.searchKey = e.target.value;
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  }

  componentDidMount() {
    // focus to search box when starting app
    this.searchBox.focus();
  }

  render() {
    return (
      <div className="row search-bar">
        <div className="col-md-9">
          <FormControl
            inputRef={ref => {this.searchBox = ref; }}
            placeholder="Search..."
            value={this.searchKey} 
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="col-md-3 btn-search">
          <Button bsStyle="primary" onClick={this.handleSearch}>Search</Button>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSearch: React.PropTypes.func
}

export default SearchBar;
