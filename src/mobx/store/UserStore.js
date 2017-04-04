import { action, observable } from 'mobx';
import User from '../User';
import fetch from 'axios';

const URL = 'https://api.github.com/search/users?q=';

class UserStore {

	@observable users = []
	@observable selectedUser = {}

	constructor(data) {
		data = data || {}
		this.users = data.users || [];
		this.selectedUser = data.selectedUser || {};
	}

	@action fetchUser(searchKey) {
		return fetch.get(URL + searchKey).then(({data}) => {
			const items = data.items;
			const users = items.map(item => {
				return new User(item)
			});
			this.users.replace(users);
			return items;
		});
	}

	setSelectedUser(user) {
		this.selectedUser = user
	}
}

export default UserStore;
