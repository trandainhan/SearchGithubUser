import { observable } from 'mobx';
import User from '../User';

class UserStore {
	constructor() {
		@observable users = [];
	}

	fetchUser(searchKey) {
		return $.get("https://api.github.com/search/users?q=" + value, function(data) {
	      var items = data.items;
	      var users = items.map(function(item) {
	        return new User(item);
	      });
	      this.users = users;
	    }.bind(this))
	}
}

export default UserStore;