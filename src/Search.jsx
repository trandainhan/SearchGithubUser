import React from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import UserDetails from './UserDetails';
import User from './User';

// import $ from 'jquery';

@observer class Search extends React.Component {

  searchKey = ''
  @observable users = []
  @observable isShowDetailPage = false
  @observable selectedUser = {}

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.backToSearchView = this.backToSearchView.bind(this);
    this.handleSelectUser = this.handleSelectUser.bind(this);
  }

  /*
  * Delay calling api after 500ms. We cancel calling request if user make another
  * request afther making the previous one in less than 500ms
  */
  handleSearch(value) {
    if (!value) return;
    if (this.searchKey === value) return;
    this.searchKey = value; // caching search key
    this.req && window.clearTimeout(this.req);
    this.req = window.setTimeout(this.callApi(value), 500);
  }

  callApi(value) {
    $.get("https://api.github.com/search/users?q=" + value, function(data) {
      var items = data.items;
      var users = items.map(function(item) {
        return new User(item);
      });
      this.users = users
    }.bind(this))
  }
  
  backToSearchView() {
    this.isShowDetailPage = false;
  }
  
  handleSelectUser(user) {
    this.selectedUser = user;
    this.isShowDetailPage = true;
  }

  render() {
    
    if (this.isShowDetailPage) {
      return <UserDetails user={this.selectedUser} onBack={this.backToSearchView} />
    }

    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <SearchResult users={this.users} onSelectUser={this.handleSelectUser} />
      </div>
    )
  }
}

export default Search;