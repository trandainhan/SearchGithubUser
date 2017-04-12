import React from 'react';

var SimpleUser = ({user, onSelect}) => (
	<div className="simple-user" onClick={onSelect} >
	  <img role="presentation" src={user.avatar_url} />
		<p>{user.login}</p>
	</div>
)

SimpleUser.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func
}

export default SimpleUser;
