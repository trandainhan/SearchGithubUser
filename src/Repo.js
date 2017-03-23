function Repo(data) {
  data && this.populateData(data);
}

Repo.prototype.populateData = function (data) {
  data = data || {};
  this.id = data.id;
  this.name = data.name;
  this.url = data.html_url;
}

export default Repo;