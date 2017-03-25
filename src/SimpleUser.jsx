import React from 'react';
import {observer} from "mobx-react";

var SimpleUser = observer(props => {
  var user = props.user;
  return (
    <div className="simple-user" onClick={props.onSelect}>
      <img role="presentation" src={user.avatar_url}/>
      <p>{user.login}</p>
    </div>
  )
})

SimpleUser.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default SimpleUser;