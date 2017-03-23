import React from 'react';

var SimpleUser = function(props) {
  var user = props.user;
  return (
    <div className="simple-user" onClick={props.onSelect}>
      <img src={user.avatar_url}/>
      <p>{user.login}</p>
    </div>
  )
}
SimpleUser.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default SimpleUser;