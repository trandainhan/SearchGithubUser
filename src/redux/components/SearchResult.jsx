import React from 'react';
import SimpleUser from './SimpleUser';

var SearchResult = ({users, onSelectUser}) => (
  <div>
    {
      users && users.map(function (user) {
        return (
          <SimpleUser
            key={user.id}
            user={user}
            onSelect={onSelectUser}
          />
        )
      })
    }
  </div>
)

export default SearchResult;
