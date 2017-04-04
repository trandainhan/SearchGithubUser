class Repo {
	constructor(data) {
		data = data || {};
		this.id = data.id;
		this.name = data.name;
		this.url = data.html_url;
	}
}

export default Repo;