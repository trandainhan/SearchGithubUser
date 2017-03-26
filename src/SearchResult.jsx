import React from 'react';
import {observer} from "mobx-react";
import SimpleUser from './SimpleUser.jsx';
import { PropTypes } from "mobx-react"

var SearchResult = observer(props => {
  var users = props.users;
  return (
    <div>
      {
        users.map(function (user) {
          return (
            <SimpleUser 
              key={user.id} 
              user={user} 
              onSelect={props.onSelectUser.bind(null, user)}
            />
          )
        })
      }
    </div>
  )
})

SearchResult.propTypes = {
  users: PropTypes.observableArray.isRequired
}

export default SearchResult;