import React from 'react';
import KeyValue from './KeyValue';
import Repos from './Repos';

var UserDetails = ({user, onBack}) => (
  <div className="user-detail">
    <button
      className="btn btn-default back-btn"
      type="button"
      onClick={onBack} >
      Back To Search Page
    </button>
    <h2>User Detail Info</h2>
    <div className="user-detail-info">
      <KeyValue dataKey="login" value={user.login} />
      <KeyValue dataKey="id" value={user.id} />
      <KeyValue dataKey="avatar_url" value={user.avatar_url} />
      <KeyValue dataKey="gravatar_id" value={user.gravatar_id} />
      <KeyValue dataKey="url" value={user.url} />
      <KeyValue dataKey="html_url" value={user.html_url} />
      <KeyValue dataKey="followers_url" value={user.followers_url} />
      <KeyValue dataKey="following_url" value={user.following_url} />
      <KeyValue dataKey="gists_url" value={user.gists_url} />
      <KeyValue dataKey="starred_url" value={user.starred_url} />
      <KeyValue dataKey="subscriptions_url" value={user.subscriptions_url} />
      <KeyValue dataKey="organizations_url" value={user.organizations_url} />
      <KeyValue dataKey="repos_url" value={user.repos_url} />
      <KeyValue dataKey="events_url" value={user.events_url} />
      <KeyValue dataKey="received_events_url" value={user.received_events_url} />
      <KeyValue dataKey="type" value={user.type} />
      <KeyValue dataKey="site_admin" value={user.site_admin} />
      <KeyValue dataKey="score" value={user.score} />
    </div>
    <Repos url={user.repos_url} />
  </div>
)

export default UserDetails;
