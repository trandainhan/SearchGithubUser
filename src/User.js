class User {
  
  constructor(user) {
    user = user || {};
    this.login = user.login;
    this.id = user.id;
    this.avatar_url = user.avatar_url;
    this.gravatar_id = user.gravatar_id;
    this.url = user.url;
    this.html_url = user.html_url;
    this.followers_url = user.followers_url;
    this.following_url = user.following_url;
    this.gists_url = user.gists_url;
    this.starred_url = user.starred_url;
    this.subscriptions_url = user.subscriptions_url;
    this.organizations_url = user.organizations_url;
    this.repos_url = user.repos_url;
    this.events_url = user.events_url;
    this.received_events_url = user.received_events_url;
    this.type = user.type;
    this.site_admin = user.site_admin;
    this.score = user.score;
  }

}

export default User;