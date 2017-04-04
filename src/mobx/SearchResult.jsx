import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import SimpleUser from './SimpleUser.jsx';

var SearchResult = observer(({users, onSelectUser}) => (
  <div>
    {
      users.map(function (user) {
        return (
          <SimpleUser
            key={user.id}
            user={user}
            onSelect={onSelectUser.bind(null, user)}
          />
        )
      })
    }
  </div>
))

SearchResult.propTypes = {
  users: PropTypes.observableArray.isRequired,
  onSelectUser: React.PropTypes.func
}

export default SearchResult;
