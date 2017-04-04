import { extendObservable } from 'mobx';

class User {

  constructor(user) {
    user = user || {};
    extendObservable(this, {
      login : user.login,
      id : user.id,
      avatar_url : user.avatar_url,
      gravatar_id : user.gravatar_id,
      url : user.url,
      html_url : user.html_url,
      followers_url : user.followers_url,
      following_url : user.following_url,
      gists_url : user.gists_url,
      starred_url : user.starred_url,
      subscriptions_url : user.subscriptions_url,
      organizations_url : user.organizations_url,
      repos_url : user.repos_url,
      events_url : user.events_url,
      received_events_url : user.received_events_url,
      type : user.type,
      site_admin : user.site_admin,
      score : user.score
    })
  }

}

export default User;