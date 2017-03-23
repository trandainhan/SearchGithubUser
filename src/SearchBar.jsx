import React from 'react';

var SearchBar = React.createClass({
  
  propTypes: {
    onSearch: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      searchKey: ''
    }
  },

  handleSearch: function() {
    this.props.onSearch(this.state.searchKey);
  },

  handleChange: function(e) {
    this.setState({
      searchKey: e.target.value
    });
  },

  handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  },

  componentDidMount: function() {
    // focus to search box when starting app
    this.refs.searchBox.focus();
  },

  render: function() {
    var props = this.props;
    return (
      <div className="row search-bar">
        <div className="col-md-9">
          <input
            ref="searchBox"
            placeholder="Search..."
            className="form-control" 
            value={this.state.searchKey} 
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            >
          </input>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-default" 
            type="button"
            onClick={this.handleSearch}>
            Search
          </button>
        </div>
      </div>
    )
  }
});

export default SearchBar;
