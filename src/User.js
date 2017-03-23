function User(data) {
  data && this.populateData(data);
}

User.prototype.populateData = function(data) {
  data = data || {};
  this.login = data.login;
  this.id = data.id;
  this.avatar_url = data.avatar_url;
  this.gravatar_id = data.gravatar_id;
  this.url = data.url;
  this.html_url = data.html_url;
  this.followers_url = data.followers_url;
  this.following_url = data.following_url;
  this.gists_url = data.gists_url;
  this.starred_url = data.starred_url;
  this.subscriptions_url = data.subscriptions_url;
  this.organizations_url = data.organizations_url;
  this.repos_url = data.repos_url;
  this.events_url = data.events_url;
  this.received_events_url = data.received_events_url;
  this.type = data.type;
  this.site_admin = data.site_admin;
  this.score = data.score;
}

export default User;