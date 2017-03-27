import React from 'react';
import {observer} from 'mobx-react';
import SimpleUser from './SimpleUser.jsx';
import { PropTypes } from 'mobx-react';

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